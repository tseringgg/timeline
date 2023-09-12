using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
//using timeline.data.models;

namespace timeline.data
{
    public partial class TimelineDbContext: DbContext
    {
        //public DbSet<Timeline> Timelines { get; set; }
        //public DbSet<Event> Events { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder
                    .EnableSensitiveDataLogging()
                    .LogTo(Console.WriteLine, LogLevel.Information)
                    //.UseSqlServer("Server=tcp:kkssserver.database.windows.net,1433;Initial Catalog=timelinedatabase;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Authentication=Active Directory Default;"); 
                    .UseSqlServer("Data Source=.\\sql2019dev;Initial Catalog=timeline;Integrated Security=True"); 
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Event>()
            //    .HasIndex(b => new { b.Title, b.Era, b.Year })
            //    .IsUnique();
        }
    }
}