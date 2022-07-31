using System.ComponentModel.DataAnnotations;

namespace timeline.dto
{
    public class EventDto
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Era { get; set; }
        [Required]
        public int Year { get; set; }
        //public int TimelineId { get; set; }
        public bool IsReviewed { get; set; }
        public bool IsApproved { get; set; }
    }
}