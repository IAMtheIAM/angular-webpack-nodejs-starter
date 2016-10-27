namespace Starter.Api
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    public class SubscriberController : BaseApiController
    {
        // GET: api/values
        [HttpGet]
        public async Task<string> Get()
        {
            var result = await this.CallApi("http://localhost:52222/subscriber/v1");
            return result;
        }

        // GET api/values/5
        [HttpGet("{shortId}")]
        public async Task<string> Get(string shortId)
        {
            var result = await this.CallApi($"http://localhost:52222/subscriber/v1/{shortId}");
            return result;
        }

        // [HttpPost]

        //// POST api/values
        // public void Post([FromBody]string value)
        // {
        // }

        //// PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody]string value)
        // {
        // }

        //// DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}