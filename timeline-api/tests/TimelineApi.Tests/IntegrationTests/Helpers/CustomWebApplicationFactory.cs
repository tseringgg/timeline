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
                /** NOTE: Do not add TestAuthHandler and Database here 
                 * Reasons:
                 * 1. AuthHandler needs to be added from test level with specific authorization. See 'EventIntegrationTests'
                 * 2. Database needs to be added from each test because the name of the database needs to be test specific.
                 *  For example, when a test creates an event from first Http call, and then tries to patch, or get from second call
                 *  the database name must be the same to be able to share the data between Http calls. On the other hand, the
                 *  database base must be isolated between tests so that they don't share data.
                 */
                // Add mocked services e.g.
                // services.AddScoped<IFooService, MockFooService>();
                // services.AddScoped<IBarService, MockBarService>();
            });
        }
    }
}