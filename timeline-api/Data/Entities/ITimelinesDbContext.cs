﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.EntityFrameworkCore;

namespace Data.Entities
{
    public interface ITimelinesDbContext
    {
        DbSet<Country> Country { get; set; }
        DbSet<Event> Event { get; set; }
        DbSet<Event_Tag> Event_Tag { get; set; }
        DbSet<Image> Image { get; set; }
        ITimelinesDbContextProcedures Procedures { get; set; }
        DbSet<Reference> Reference { get; set; }
        DbSet<Tag> Tag { get; set; }
        DbSet<Timeline> Timeline { get; set; }
        DbSet<User> User { get; set; }

        ITimelinesDbContextProcedures GetProcedures();
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}