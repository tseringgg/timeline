using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using timeline.data;
using Timeline.WebApi.Tests.IntegrationTests.Helpers;
using TimelineApi.Tests.IntegrationTests.Helpers.MockAuthHandlers;
using Xunit;

namespace TimelineApi.Tests.IntegrationTests.Helpers
{
    public class TestBase_IntegrationTests : IClassFixture<CustomWebApplicationFactory<Program>>
    {
        protected HttpClient CreateClientWithAdminAuthorization(CustomWebApplicationFactory<Program> factory, string dbName = "Foo")
        {
            var schemeName = nameof(AdminPolicyMockAuthHandler);

            var _client = factory.WithWebHostBuilder(builder =>
            {
                builder.ConfigureTestServices(services =>
                {
                    services.AddAuthentication(schemeName)
                    .AddScheme<AuthenticationSchemeOptions, AdminPolicyMockAuthHandler>(
                        schemeName, options => { });

                    CreateTestDatabase(dbName, services);
                });
            })
            .CreateClient(new Microsoft.AspNetCore.Mvc.Testing.WebApplicationFactoryClientOptions
            {
                AllowAutoRedirect = false
            });

            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(schemeName);
            return _client;
        }

        private static void CreateTestDatabase(string dbName, IServiceCollection services)
        {
            services.AddDbContext<TimelineDbContext>((options, context) =>
            {
                context.UseInMemoryDatabase(dbName);
            });

            var sp = services.BuildServiceProvider();

            using (var scope = sp.CreateScope())
            {
                var scopedServices = scope.ServiceProvider;
                var db = scopedServices.GetRequiredService<TimelineDbContext>();
                db.Database.EnsureCreated();
            }
        }
    }
}
