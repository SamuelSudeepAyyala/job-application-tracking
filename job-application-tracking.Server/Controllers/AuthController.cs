using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using JobApplicationTracking.Server.Data;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using job_application_tracking.Server.Models;
using JobApplicationTracking.Server.Models;

namespace job_application_tracking.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AuthController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        // POST api/auth/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
        {
            if (registerRequest == null)
            {
                return BadRequest("Invalid registration data.");
            }

            // Check if the passwords match
            if (registerRequest.Password != registerRequest.ConfirmPassword)
            {
                return BadRequest("Passwords do not match.");
            }

            // Check if the user already exists
            var existingUser = await _userManager.FindByEmailAsync(registerRequest.Email);
            if (existingUser != null)
            {
                return BadRequest("User already exists.");
            }

            // Create a new user
            var newUser = new User { UserName = registerRequest.Email, Email = registerRequest.Email };
            var result = await _userManager.CreateAsync(newUser, registerRequest.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            return Ok(new { message = "User registered successfully" });
        }

        // POST api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            if (loginRequest == null)
            {
                return BadRequest("Invalid login data.");
            }

            var user = await _userManager.FindByEmailAsync(loginRequest.Email);
            if (user == null)
            {
                return Unauthorized("Invalid username or password.");
            }

            var result = await _signInManager.PasswordSignInAsync(user, loginRequest.Password, false, false);
            if (!result.Succeeded)
            {
                return Unauthorized("Invalid username or password.");
            }

            return Ok(user);
        }
    }
}
