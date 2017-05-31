using IdentityModel.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace Dotnet.Starter.Api
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

        protected async Task<HttpResponseMessage> PostToApi(string endpoint, string jsonContent)
        {
            var client = await GetClient();
            StringContent content = new StringContent(jsonContent, Encoding.UTF8, "application/json");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            return await client.PostAsync(new Uri(endpoint), content);
        }

        private async Task<TokenResponse> GetTokenAsync()
        {
            var client = new TokenClient(
                "http://localhost:8281/connect/token",
                "client",
                "pass");
            //return await client.RequestClientCredentialsAsync("scope");
            return await client.RequestResourceOwnerPasswordAsync("my@email.com", "passWord!", "string");
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
