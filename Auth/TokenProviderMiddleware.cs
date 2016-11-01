namespace Dotnet.Starter.Auth
{
    using System;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Security.Principal;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Options;

    using Newtonsoft.Json;

    using NuGet.Protocol.Core.v3;

    public class TokenProviderMiddleware
    {
        private readonly RequestDelegate next;

        private readonly TokenProviderOptions options;

        public TokenProviderMiddleware(RequestDelegate next, IOptions<TokenProviderOptions> options)
        {
            this.next = next;
            this.options = options.Value;
        }

        public Task Invoke(HttpContext context)
        {
            // If the request path doesn't match, skip
            if (!context.Request.Path.Equals(this.options.Path, StringComparison.Ordinal)) return this.next(context);

            // Request must be POST with Content-Type: application/x-www-form-urlencoded
            if (!context.Request.Method.Equals("POST") || !context.Request.HasFormContentType)
            {
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = 400;
                var response = new { error = "Bad request" };
                return context.Response.WriteAsync(response.ToJson());
            }

            return this.GenerateToken(context);
        }

        private async Task GenerateToken(HttpContext context)
        {
            context.Response.ContentType = "application/json";
            var username = context.Request.Form["username"];
            var password = context.Request.Form["password"];

            var identity = await this.GetIdentity(username, password);

            if (identity == null)
            {
                context.Response.StatusCode = 400;
                var res = new { error = "Invalid username or password." };
                await context.Response.WriteAsync(res.ToJson());
                return;
            }

            var now = DateTime.UtcNow;
            var offset = new DateTimeOffset(now, TimeSpan.Zero);
            
            // Specifically add the jti (random nonce), iat (issued timestamp), and sub (subject/user) claims.
            // You can add other claims here, if you want:
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(
                    JwtRegisteredClaimNames.Iat,
                    offset.ToUnixTimeSeconds().ToString(),
                    ClaimValueTypes.Integer64)
            };

            // Create the JWT and write it to a string
            var jwt = new JwtSecurityToken(
                          this.options.Issuer,
                          this.options.Audience,
                          claims,
                          now,
                          now.Add(this.options.Expiration),
                          this.options.SigningCredentials);

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            
            // Serialize and return the response
            var response = JsonConvert.SerializeObject(
                new { access_token = encodedJwt, expires_in = (int)this.options.Expiration.TotalSeconds, success = true },
                new JsonSerializerSettings { Formatting = Formatting.Indented });

            await context.Response.WriteAsync(response);
        }

        private Task<ClaimsIdentity> GetIdentity(string username, string password)
        {
            // DON'T do this in production, obviously!
            if ((username.ToLower() == "admin") && (password == "admin"))
            {
                return Task.FromResult(new ClaimsIdentity(new GenericIdentity(username, "Token"), new Claim[] { }));
            }

            // Credentials are invalid, or account doesn't exist
            return Task.FromResult<ClaimsIdentity>(null);
        }
    }
}