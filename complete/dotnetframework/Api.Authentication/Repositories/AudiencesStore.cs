namespace Api.Authentication.Repositories
{
    using System;
    using System.Collections.Concurrent;
    using System.Security.Cryptography;

    using Api.Authentication.Entities;

    using Microsoft.Owin.Security.DataHandler.Encoder;

    public static class AudiencesStore
    {
        private static readonly ConcurrentDictionary<string, Audience> Audiences = new ConcurrentDictionary<string, Audience>();

        static AudiencesStore()
        {
            Audiences.TryAdd("099153c2625149bc8ecb3e85e03f0022",
            new Audience
            {
                ClientId = "099153c2625149bc8ecb3e85e03f0022",
                Base64Secret = "IxrAjDoa2FqElO7IhrSrUJELhUckePEPVpaePlS_Xaw",
                Name = "ResourceServer.Api 1"
            });
        }

        public static Audience AddAudience(string name)
        {
            var clientId = Guid.NewGuid().ToString("N");

            var key = new byte[32];
            RandomNumberGenerator.Create().GetBytes(key);
            var base64Secret = TextEncodings.Base64Url.Encode(key);

            var newAudience = new Audience { ClientId = clientId, Base64Secret = base64Secret, Name = name };
            Audiences.TryAdd(clientId, newAudience);
            return newAudience;
        }

        public static Audience FindAudience(string clientId)
        {
            Audience audience = null;
            return Audiences.TryGetValue(clientId, out audience) ? audience : null;
        }
    }
}