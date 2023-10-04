using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Image.Queries
{
    public class ImageDto
    {
        public int ImageId { get; set; }

        public string ImageUrl { get; set; }

        public int EventId { get; set; }
    }
}
