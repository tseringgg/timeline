using Application.Features.Event.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Timeline.Queries
{
    public class TimelineDto
    {
        public int TimelineId { get; set; }

        public string Era { get; set; }

        public int CenturyId { get; set; }

        public ICollection<EventDto> Events { get; set; } = new List<EventDto>();
    }
}
