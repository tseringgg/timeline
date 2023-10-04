using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Reference.Queries
{
    public class ReferenceDto
    {
        public int ReferenceId { get; set; }

        public int EventId { get; set; }

        public string Url { get; set; }
    }
}
