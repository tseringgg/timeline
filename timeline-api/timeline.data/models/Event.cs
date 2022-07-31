namespace timeline.data
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Era { get; set; }
        public int Year { get; set; }
        public int TimelineId { get; set; }
        public bool IsReviewed { get; set; }
        public bool IsApproved { get; set; }

    }
}
