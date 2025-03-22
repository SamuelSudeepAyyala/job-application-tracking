using Microsoft.AspNetCore.Identity;

namespace JobApplicationTracking.Server.Data
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }
    }
}
