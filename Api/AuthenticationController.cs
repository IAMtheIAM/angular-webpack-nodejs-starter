namespace IAMtheIAM.Api
{
    using Microsoft.AspNetCore.Mvc;

    [Produces("application/json")]
    [Route("api/auth")]
    public class AuthenticationController : Controller
    {
        
        public dynamic PostLogin()
        {
            return 0;
        }
    }
}