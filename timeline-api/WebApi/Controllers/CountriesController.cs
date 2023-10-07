using Application.Features.Country.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CountriesController : BaseController
    {
        [HttpGet]
        public async Task<IActionResult> GetTimelines()
        {
            var result = await Mediator.Send(new GetCountriesQuery());
            return Ok(result);
        }
    }
}
