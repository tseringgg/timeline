using Data.Entities;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkCreateTimelineEvents.Helpers
{
    public class CustomWebApplicationFactory<TStartup> : WebApplicationFactory<TStartup> where TStartup : class
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.UseEnvironment("IntegrationTests");

            builder.ConfigureServices(services =>
            {
                var serviceProviders = services.BuildServiceProvider();
                var config = serviceProviders.GetRequiredService<IConfiguration>();

                var connectionString = "Server=...";
                services.AddDbContext<TimelinesDbContext>(options => options.UseSqlServer(connectionString));

                services.AddScoped<ITimelinesDbContext>(provider => (ITimelinesDbContext)provider.GetRequiredService<TimelinesDbContext>());

                services.AddAuthentication(defaultScheme: TestAuthHandler.testAuthScheme)
                    .AddScheme<AuthenticationSchemeOptions, TestAuthHandler>(
                        TestAuthHandler.testAuthScheme, options => { });

                var sp = services.BuildServiceProvider();
            });
        }
    }
}
