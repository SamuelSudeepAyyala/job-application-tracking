using Microsoft.AspNetCore.Mvc;
using job_application_tracking.Server.Models;

namespace job_application_tracking.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private static List<User> _users = new List<User>();

        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            if (_users.Any(u => u.Username == user.Username || u.Email == user.Email))
            {
                return BadRequest("User with this username or email already exists.");
            }

            _users.Add(user);
            return Ok("User registered successfully.");
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            var existingUser = _users.FirstOrDefault(u => u.Username == user.Username && u.Password == user.Password);
            if (existingUser == null)
            {
                return Unauthorized("Invalid username or password.");
            }

            return Ok("Login successful.");
        }
    }
}
