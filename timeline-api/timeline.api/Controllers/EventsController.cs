using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
        // GET: api/<EventsController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new string[] { "event1", "event2"});
            //return Ok(_repo.GetAll());
        }

        // GET api/<EventsController>/5
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

        // POST api/<EventsController>
        [HttpPost]
        public IActionResult Post([FromBody] EventDto value)
        {
            _repo.Create(value);

            return Ok();
        }

        // PATCH api/<EventsController>/5
        [HttpPatch("{id}")]
        public IActionResult Patch(int id, [FromBody] EventDto value)
        {
            _repo.Patch(id, value);

            return Ok();
        }

        // DELETE api/<EventsController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
    }
}
