using Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddDataServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<TimelinesDbContext>(options =>
            options.UseSqlServer(configuration["AzureAd:ConnectionString"]//,//.GetConnectionString("DefaultConnection"),
            //builder => builder.MigrationsAssembly(typeof(TimelinesDbContext).Assembly.FullName)
            ));

            services.AddScoped<ITimelinesDbContext>(provider => provider.GetRequiredService<TimelinesDbContext>());

            return services;
        }
    }
}
