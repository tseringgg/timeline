using Microsoft.AspNetCore.Authorization;

namespace WebApi.Security
{
    public class AdminRoleRequirement : AuthorizationHandler<AdminRoleRequirement>, IAuthorizationRequirement, IRoleRequirement
    {

        string IRoleRequirement.RoleName { get => "Admin"; }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, AdminRoleRequirement requirement)
        {
            if (null != context.User.Claims.FirstOrDefault(c => c.Value == "timeline_az_admin"))
            {
                context.Succeed(requirement);
            }
            else
            {
                context.Fail();
            }
            return Task.CompletedTask;
        }
    }
}
