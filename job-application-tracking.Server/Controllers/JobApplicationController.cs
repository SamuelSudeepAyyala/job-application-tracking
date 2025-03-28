﻿using job_application_tracking.Server.Data;
using job_application_tracking.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;


namespace job_application_tracking.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobApplicationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JobApplicationController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/jobapplication
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobApplication>>> GetJobApplications([FromQuery] string userId)
        {

            if (userId == null)
            {
                return Unauthorized("UserId is missing.");
            }

            // Fetch job applications specific to the logged-in user
            var jobApplications = await _context.JobApplications
                                           .Where(j => j.UserId == userId)
                                           .ToListAsync();

            return Ok(jobApplications);
        }

        // GET: api/jobapplication/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<JobApplication>> GetJobApplication(int id)
        {
            var jobApplication = await _context.JobApplications.FindAsync(id);
            if (jobApplication == null)
                return NotFound();
            return jobApplication;
        }

        // POST: api/jobapplication
        [HttpPost]
        public async Task<ActionResult<JobApplication>> CreateJobApplication(JobApplication jobApplication)
        {
            _context.JobApplications.Add(jobApplication);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetJobApplication), new { id = jobApplication.Id }, jobApplication);
        }

        // PUT: api/jobapplication/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateJobApplication(int id, JobApplication jobApplication)
        {
            if (id != jobApplication.Id)
                return BadRequest();

            _context.Entry(jobApplication).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/jobapplication/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobApplication(int id)
        {
            var jobApplication = await _context.JobApplications.FindAsync(id);
            if (jobApplication == null)
                return NotFound();

            _context.JobApplications.Remove(jobApplication);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

}