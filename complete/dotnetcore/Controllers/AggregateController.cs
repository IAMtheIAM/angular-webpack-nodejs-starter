using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Dotnet.Starter.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;


namespace Dotnet.Starter.Controllers
{
    public class Violation
    {
        public Guid Id { get; set; }
        public string ViolationName { get; set; }
        public decimal FineAmount { get; set; }
    }

    public class Suscriber
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string WorkPhone { get; set; }
        public string CellPhone { get; set; }
    }

    public class ViolationDescriptionViewModel
    {
        public Guid ViolationId { get; set; }
        public string SubscriberName { get; set; }
        public string ContactPhones { get; set; }
        public string Violation { get; set; }
        public string Fine { get; set; }
    }

    [Produces("application/json")]
    [Route("aggregate")]
    public class AggregateController : Controller
    {
        private readonly SuscribersMicroServiceConfiguration _suscribersMicroServiceConfiguration;
        private readonly ViolationMicroServiceConfiguration _violationMicroServiceConfiguration;

        public AggregateController(IOptions<ViolationMicroServiceConfiguration> violationMicroServiceConfiguration,
            IOptions<SuscribersMicroServiceConfiguration> suscribersMicroServiceConfiguration)
        {
            _violationMicroServiceConfiguration = violationMicroServiceConfiguration.Value;
            _suscribersMicroServiceConfiguration = suscribersMicroServiceConfiguration.Value;
        }
        
        /// <summary>
        /// Example of an "Aggregate" API method
        /// For OUR app we need to show a violation and it's related info
        /// However, 'Violation" and "Subscriber" data come from two different
        /// microservices. So.. we call them both and put together
        /// a view model that suits OUR apps needs
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("getviolationdescription")]
        [Authorize]
        public async Task<IActionResult> GetViolationDescription()
        {
            // NOTE! This will be a custom attribute filter in real code to return, maybe a json string and unathorized hhtp reponse
            // If you don't have an account, just register when you first fire up app or simply
            // comment out the  '[Authorize]' attribute above
            //  OR for hand authorization
            // comment out '[Authorize]' attribute and uncomment following line:
            //if (!User.Identity.IsAuthenticated) return new NoContentResult();

            //make HTTP request to get violation info
            Violation violation;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(_violationMicroServiceConfiguration.BaseUri);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                violation = JsonConvert.DeserializeObject<Violation>(await client.GetStringAsync(_violationMicroServiceConfiguration.GetViolationRoute));
            }

            //make HTTP request to get subscriber info
            Suscriber suscriber;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(_suscribersMicroServiceConfiguration.BaseUri);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                suscriber = JsonConvert.DeserializeObject<Suscriber>(await client.GetStringAsync(_suscribersMicroServiceConfiguration.GetSubscriberRoute));
            }

            //here we 'aggregate' info we need for OUR view model
            var violationDescriptionViewModel = new ViolationDescriptionViewModel
            {
                ViolationId = violation.Id,
                SubscriberName = $"{suscriber.LastName}, {suscriber.FirstName}",
                ContactPhones = $"Office: {suscriber.WorkPhone}, Mobile: {suscriber.CellPhone}",
                Violation = violation.ViolationName,
                Fine = $"{violation.FineAmount:C}" //OUR view wants deciaml formatted as money
            };


            //return
            return Json(violationDescriptionViewModel);
        }


    }
}
