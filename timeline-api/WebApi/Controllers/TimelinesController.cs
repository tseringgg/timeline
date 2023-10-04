using Application.Features.Timeline.Commands;
using Application.Features.Timeline.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TimelinesController : BaseController
    {
        [HttpGet]
        public async Task<IActionResult> GetTimelines()
        {
            var result = await Mediator.Send(new GetTimelinesQuery());
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTimeline(CreateTimelineDto dto)
        {
            var result = await Mediator.Send(new CreateTimelineCommand(dto));
            return Ok(result);
        }
    }
}
