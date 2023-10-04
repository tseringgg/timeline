using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Image.Commands
{
    public class CreateImageDto
    {
        public string ImageUrl { get; set; }

        public int EventId { get; set; }
    }
}
