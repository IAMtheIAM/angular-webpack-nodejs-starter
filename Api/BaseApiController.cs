using IdentityModel.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace Armls.Helios.Web.Api
{
    [Route("api/[controller]")]
    public class BaseApiController : Controller
    {
        private HttpClient _client;

        protected async Task<HttpClient> GetClient()
        {
            if (_client == null)
            {
                _client = new HttpClient();
                var token = await GetTokenAsync();
                _client.SetBearerToken(token.AccessToken);
            }

            return _client;
        }

        protected async Task<string> CallApi(string endpoint)
        {
            var client = await GetClient();
            return await client.GetStringAsync(endpoint);
        }

        private async Task<TokenResponse> GetTokenAsync()
        {
            var client = new TokenClient(
                "http://localhost:8281/connect/token",
                "atlasSvcClient",
                "aSVCSpwd");
            //return await client.RequestClientCredentialsAsync("addamsApiScope");
            return await client.RequestResourceOwnerPasswordAsync("mgaspar@armls.com", "Atlas4!", "addamsApiScope");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _client?.Dispose();
            }

            base.Dispose(disposing);
        }
    }
}
