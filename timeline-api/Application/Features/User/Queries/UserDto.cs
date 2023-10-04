using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.User.Queries
{
    public class UserDto
    {
        public int UserId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Middle_Name { get; set; }

        public string Email { get; set; }

        public string UserPrincipalName { get; set; }

        public bool IsDeleted { get; set; }
    }
}

