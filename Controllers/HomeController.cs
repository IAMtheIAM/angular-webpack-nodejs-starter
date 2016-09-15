using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Armls.Helios.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

//    [Route("", Order = -1)]
//    [Route("{*pathInfo}", Order = 1000)]
//    public async Task<IActionResult> Index(string pathInfo = "")
//    {
//      return View();
//    }
//
//        public IActionResult About()
//        {
//            ViewData["Message"] = "Your application description page.";
//
//            return View();
//        }
//
//        public IActionResult Contact()
//        {
//            ViewData["Message"] = "Your contact page.";
//
//            return View();
//        }
//
//        public IActionResult Error()
//        {
//            return View();
//        }
    }
}
