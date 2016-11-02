namespace Api.Authentication.Formats
{
    using System;
    using System.IdentityModel.Tokens;

    using Api.Authentication.Repositories;

    using Microsoft.Owin.Security;
    using Microsoft.Owin.Security.DataHandler.Encoder;

    using Thinktecture.IdentityModel.Tokens;

    /// <summary>
    /// The class “JwtFormat” implements the interface “ISecureDataFormat”, the JWT
    /// generation will take place inside method “Protect”. The constructor of this class 
    /// accepts the “Issuer” of this JWT which will be our Authorization server, this can 
    /// be string or URI, in our case we’ll fix it to URI with the value “http://localhost/”
    /// <para/>
    /// By doing this requester for an access token from our Authentication server will receive 
    /// a signed token which contains claims for a certain resource owner (user) and this token 
    /// intended to certain Resource server (audience) as well.
    /// </summary>
    public class JwtFormat : ISecureDataFormat<AuthenticationTicket>
    {
        private const string AudiencePropertyKey = "audience";

        private readonly string issuer;

        public JwtFormat(string issuer)
        {
            this.issuer = issuer;
        }

        /// <summary>
        /// Inside “Protect” method we are doing the following:
        /// 1. Reading the audience(client id) from the Authentication Ticket 
        ///    properties, then getting this audience from the In-memory store.
        /// <para/>
        /// 2. Reading the Symmetric key for this audience and Base64 decode it 
        ///    to byte array which will be used to create a HMAC265 signing key.
        /// <para/>
        /// 3. Preparing the raw data for the JSON Web Token which will be issued 
        ///    to the requester by providing the issuer, audience, user claims, 
        ///    issue date, expiry date, and the signing Key which will sign the JWT payload.
        /// <para/>
        /// 4. Lastly we serialize the JSON Web Token to a string and return it to the requester.
        /// </summary>
        public string Protect(AuthenticationTicket data)
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            // Check if the dictionary contains our audience
            var audienceId = data.Properties.Dictionary.ContainsKey(AudiencePropertyKey)
                                 ? data.Properties.Dictionary[AudiencePropertyKey]
                                 : null;

            if (string.IsNullOrWhiteSpace(audienceId))
            {
                throw new InvalidOperationException("AuthenticationTicket.Properties does not include audience");
            }

            var audience = AudiencesStore.FindAudience(audienceId);
            var symmetricKeyAsBase64 = audience.Base64Secret;
            var keyByteArray = TextEncodings.Base64Url.Decode(symmetricKeyAsBase64);
            var signingKey = new HmacSigningCredentials(keyByteArray);
            var issued = data.Properties.IssuedUtc;
            var expires = data.Properties.ExpiresUtc;

            var token = new JwtSecurityToken(
                            this.issuer,
                            audienceId,
                            data.Identity.Claims,
                            issued.Value.UtcDateTime,
                            expires.Value.UtcDateTime,
                            signingKey);

            var handler = new JwtSecurityTokenHandler();

            var jwt = handler.WriteToken(token);

            return jwt;
        }

        public AuthenticationTicket Unprotect(string protectedText)
        {
            throw new NotImplementedException();
        }
    }
}