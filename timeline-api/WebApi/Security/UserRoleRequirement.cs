using Microsoft.AspNetCore.Authorization;

namespace WebApi.Security
{
    public class UserRoleRequirement : AuthorizationHandler<UserRoleRequirement>, IAuthorizationRequirement, IRoleRequirement
    {
        string IRoleRequirement.RoleName { get => "User"; }
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, UserRoleRequirement requirement)
        {
            if (null != context.User.Claims.FirstOrDefault(c => c.Value == "User"))
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
