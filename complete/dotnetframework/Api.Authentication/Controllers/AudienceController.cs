namespace Api.Authentication.Controllers
{
    using System.Web.Http;

    using Api.Authentication.Entities;
    using Api.Authentication.Models;
    using Api.Authentication.Repositories;

    [RoutePrefix("api/audience")]
    public class AudienceController : ApiController
    {
        [Route("")]
        public IHttpActionResult Post(AudienceModel audienceModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newAudience = AudiencesStore.AddAudience(audienceModel.Name);

            return Ok<Audience>(newAudience);

        }
    }
}
