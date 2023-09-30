using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace TimelineApi.Tests.IntegrationTests.Helpers.MockAuthHandlers
{
    /// <summary>
    /// Following implented based on new changes in ASPNET Core 7.0
    /// https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-7.0
    /// </summary>
    public class AdminPolicyMockAuthHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        public static readonly string testAuthScheme = "TestScheme";
        public AdminPolicyMockAuthHandler(IOptionsMonitor<AuthenticationSchemeOptions> options,
        ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock)
        : base(options, logger, encoder, clock)
        {
        }

        protected override Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            var identity = new ClaimsIdentity(new ClaimsIdentity(new[] {
                new Claim(ClaimTypes.Role, "Admin"),
            }));
            var principal = new ClaimsPrincipal(identity);
            var ticket = new AuthenticationTicket(principal, testAuthScheme);

            var result = AuthenticateResult.Success(ticket);

            return Task.FromResult(result);
        }
    }
}
