namespace timeline.data.models
{
    public class Timeline
    {
        public Timeline()
        {
            Events = new List<Event>();
        }

        public int ID { get; set; }
        public string Name { get; set; }

        public ICollection<Event> Events { get; set; }
        public int EventId { get; set; }
    }
}