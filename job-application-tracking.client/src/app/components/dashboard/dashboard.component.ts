import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../../services/job-application/job-application.service';
import { JobApplication } from '../../models/job-application.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobApplications: JobApplication[] = [];
  p: number = 1; // Pagination variable for ngx-pagination

  constructor(private jobApplicationService: JobApplicationService) { }

  ngOnInit(): void {
    this.loadJobApplications();
  }

  // Fetch job applications from the backend
  loadJobApplications(): void {
    this.jobApplicationService.getAllJobApplications().subscribe(
      (data: JobApplication[]) => {
        this.jobApplications = data;
      },
      (error) => {
        console.error('Error fetching job applications:', error);
      }
    );
  }

  // View a specific job application
  viewJobApplication(jobApplicationId: number): void {
    console.log('Viewing job application with ID:', jobApplicationId);
    // You can add routing logic to a job application detail page
  }

  // Delete a specific job application
  deleteJobApplication(jobApplicationId: number): void {
    if (confirm('Are you sure you want to delete this job application?')) {
      this.jobApplicationService.deleteJobApplication(jobApplicationId).subscribe(
        () => {
          this.jobApplications = this.jobApplications.filter(
            (job) => job.id !== jobApplicationId
          );
          alert('Job application deleted successfully!');
        },
        (error) => {
          console.error('Error deleting job application:', error);
        }
      );
    }
  }
}
