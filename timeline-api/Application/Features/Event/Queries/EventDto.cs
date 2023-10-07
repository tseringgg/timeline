using Application.Features.Image.Queries;
using Application.Features.Reference.Queries;
using Application.Features.User.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Event.Queries
{
    public class EventDto
    {
        public int EventId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Era { get; set; }

        public int CountryId { get; set; }

        public int Year { get; set; }

        public int TimelineId { get; set; }

        public bool IsReviewed { get; set; }

        public bool IsDeleted { get; set; }

        public bool IsApproved { get; set; }

        public int? ReviewerUserId { get; set; }

        public DateTime? ReviewDate { get; set; }

        public int CreatorUserId { get; set; }

        public DateTime CreateDate { get; set; }

        public int? ApproverUserId { get; set; }

        public DateTime? ApproveDate { get; set; }

        public DateTime? LastUpdateDate { get; set; }

        public int? LastUpdaterUserId { get; set; }

        public DateTime? EventDate { get; set; }

        //public virtual UserDto ApproverUser { get; set; }

        //public virtual UserDto CreatorUser { get; set; }

        public virtual ICollection<ImageDto> Images { get; set; } = new List<ImageDto>();

        ////public virtual UserDto LastUpdaterUser { get; set; }

        public virtual ICollection<ReferenceDto> References { get; set; } = new List<ReferenceDto>();

        //public ICollection<string> ImageUrls { get; set; } = new List<string>();

        ////public virtual UserDto LastUpdaterUser { get; set; }

        //public ICollection<string> ReferenceUrls { get; set; } = new List<string>();
    }
}
