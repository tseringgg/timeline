using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Reference.Commands
{
    public class CreateReferenceDto
    {
        public int EventId { get; set; }

        public string Url { get; set; }
    }
}
