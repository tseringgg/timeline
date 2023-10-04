using Microsoft.AspNetCore.Authorization;

namespace WebApi.Security
{
    public class RoleRequirements<T> where T: IAuthorizationRequirement, new()
    {
        public void Add(AuthorizationOptions options)
        {
            var requirement = new T();
            options.AddPolicy(((IRoleRequirement)requirement).RoleName, policy =>
            {
                policy.AddRequirements(requirement);
            });
        }
    }
}
