﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;

namespace Data.Entities.Configurations
{
    public partial class TagConfiguration : IEntityTypeConfiguration<Tag>
    {
        public void Configure(EntityTypeBuilder<Tag> entity)
        {
            entity.Property(e => e.Name)
            .IsRequired()
            .HasMaxLength(50);

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<Tag> entity);
    }
}
