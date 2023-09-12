using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using timeline.data;

namespace Timeline.WebApi.Tests.IntegrationTests.Helpers
{
    public class CustomWebApplicationFactory<TStartup> : WebApplicationFactory<IStartup> where TStartup : class
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.UseEnvironment("IntegrationTests");

            builder.ConfigureServices(services =>
            {
                var descriptor = services.SingleOrDefault(x => x.ServiceType == typeof(TimelineDbContext));

                if (descriptor != null)
                {
                    services.Remove(descriptor);
                }

                services.AddDbContext<TimelineDbContext>((options, context) => context.UseInMemoryDatabase(new Guid().ToString()));

                /* Since Asp.Net 7, this is the way to implement test auth handler */
                services.AddAuthentication(defaultScheme: TestAuthHandler.testAuthScheme)
                .AddScheme<AuthenticationSchemeOptions, TestAuthHandler>(
                    TestAuthHandler.testAuthScheme, options => { });

                /* This no longer works with AspNet 7, EF Core 7 */
                //services.AddSingleton<IPolicyEvaluator, FakePolicyEvaluator>();

                var sp = services.BuildServiceProvider();

                using (var scope = sp.CreateScope())
                {
                    var scopedServices = scope.ServiceProvider;
                    var db = scopedServices.GetRequiredService<TimelineDbContext>();
                    db.Database.EnsureCreated();


                }
            });
            //base.ConfigureWebHost(builder);
        }
    }
}