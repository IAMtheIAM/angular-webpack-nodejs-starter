namespace Starter.Api
{
    using System.Net.Http;
    using System.Threading.Tasks;

    using IdentityModel.Client;

    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    public class BaseApiController : Controller
    {
        private HttpClient client;

        protected async Task<string> CallApi(string endpoint)
        {
            var c = await this.GetClient();
            return await c.GetStringAsync(endpoint);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing) this.client?.Dispose();

            base.Dispose(disposing);
        }

        protected async Task<HttpClient> GetClient()
        {
            if (this.client == null)
            {
                this.client = new HttpClient();
                var token = await this.GetTokenAsync();
                this.client.SetBearerToken(token.AccessToken);
            }

            return this.client;
        }

        private async Task<TokenResponse> GetTokenAsync()
        {
            var c = new TokenClient("http://localhost:8281/connect/token", "atlasSvcClient", "aSVCSpwd");

            // return await client.RequestClientCredentialsAsync("addamsApiScope");
            return await c.RequestResourceOwnerPasswordAsync("mgaspar@armls.com", "Atlas4!", "addamsApiScope");
        }
    }
}