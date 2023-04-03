using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using timeline.api.constants;
using timeline.domain.Repo;
using timeline.dto;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace timeline.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EventsController : ControllerBase
    {
        private EventRepo _repo;
        public EventsController(IMapper mapper)
        {
            _repo = new EventRepo(mapper);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_repo.Get(id));
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpPost]
        [Authorize(Policy = PolicyNames.Administrator)]
        public IActionResult Post([FromBody] EventDto value)
        {
            _repo.Create(value);

            return Ok();
        }

        [HttpPatch("{id}")]
        [Authorize(Policy = PolicyNames.Administrator)]
        public IActionResult Patch(int id, [FromBody] EventDto value)
        {
            _repo.Patch(id, value);

            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize(Policy = PolicyNames.Administrator)]
        public IActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
    }
}
