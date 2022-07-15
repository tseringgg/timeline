using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using timeline.data.models;

namespace timeline.data
{
    public partial class TimelineDbContext: DbContext
    {
        public DbSet<Timeline> Timelines { get; set; }
        public DbSet<Event> Events { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder
                    .EnableSensitiveDataLogging()
                    .LogTo(Console.WriteLine, LogLevel.Information)
                    .UseSqlServer("Server=tcp:kkssserver.database.windows.net,1433;Initial Catalog=timelinedatabase;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Authentication=Active Directory Default;"); 
                //   "Data Source=kkssserver.database.windows.net,1433;
                //   Initial Catalog=kkssdatabase;MultipleActiveResultSets=False;Encrypt=True;
                //   TrustServerCertificate=False;Authentication=Active Directory Integrated;")
            }
        }
    }
}