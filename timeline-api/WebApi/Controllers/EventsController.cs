using Application.Features.Event.Commands;
using Application.Features.Event.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : BaseController
    {
        [HttpGet]
        public async Task<IActionResult> GetTimelines()
        {
            var result = await Mediator.Send(new GetEventsQuery());
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEvent([FromBody] CreateEventDto dto)
        {
            var result = await Mediator.Send(new CreateEventCommand(dto, CurrentUserPrincipalName));
            return Ok(result);
        }
    }
}
