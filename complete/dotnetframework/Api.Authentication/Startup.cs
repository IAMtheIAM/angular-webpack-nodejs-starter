using Microsoft.Owin;

[assembly: OwinStartup(typeof(Api.Authentication.Startup))]

namespace Api.Authentication
{
    using System;
    using System.Web.Http;
    using System.Web.Http.Cors;

    using Api.Authentication.Formats;
    using Api.Authentication.Providers;

    using Microsoft.Owin;
    using Microsoft.Owin.Security.OAuth;

    using Owin;
    
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();

            // Web API routes
            config.MapHttpAttributeRoutes();

            this.ConfigureOAuth(app);
            
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            config.EnableCors(new EnableCorsAttribute("*", "*", "GET, POST, OPTIONS, PUT, DELETE"));

            app.UseWebApi(config);
        }

        public void ConfigureOAuth(IAppBuilder app)
        {
            const string Url = "https://localhost/";

            var options = new OAuthAuthorizationServerOptions()
            {
                // For Dev enviroment only (on production should be AllowInsecureHttp = false)
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/oauth2/token"),    // Token API route
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(30),   // Expiration time
                Provider = new CustomOAuthProvider(),
                AccessTokenFormat = new JwtFormat(Url)
            };

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            // OAuth 2.0 Bearer Access Token Generation
            app.UseOAuthAuthorizationServer(options);
        }
    }
}