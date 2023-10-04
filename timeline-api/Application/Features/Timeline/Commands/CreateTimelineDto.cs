using Application.Common.Enums;
using Application.Features.Event.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Timeline.Commands
{
    public class CreateTimelineDto
    {
        public Era Era { get; set; }

        public int CenturyId { get; set; }
    }
}
