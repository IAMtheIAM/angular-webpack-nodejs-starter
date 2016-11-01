namespace Dotnet.Starter.Auth
{
    using System;

    using Microsoft.IdentityModel.Tokens;

    public class TokenProviderOptions
    {
        public string Audience { get; set; }

        public TimeSpan Expiration { get; set; } = TimeSpan.FromMinutes(720);

        public string Issuer { get; set; }

        public string Path { get; set; } = "/token";

        public SigningCredentials SigningCredentials { get; set; }
    }
}