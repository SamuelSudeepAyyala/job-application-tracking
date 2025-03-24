import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../../services/job-application/job-application.service';
import { JobApplication } from '../../models/job-application.model';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobApplications: JobApplication[] = [];
  p: number = 1; // Pagination variable for ngx-pagination
  selectedJobApplication: JobApplication | null = null; // Holds the job application for the modal

  message: string = '';

  constructor(private jobApplicationService: JobApplicationService) { }

  ngOnInit(): void {
    this.loadJobApplications();
  }

  // Fetch job applications from the backend
  loadJobApplications(): void {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.jobApplicationService.getAllJobApplications(userId,headers).subscribe(
      (data: JobApplication[]) => {
        if (data.length == 0) {
          console.log('No job applications');
          this.message = 'No job applications';
        }
        else {
          this.jobApplications = data;
        }
        
      },
      (error) => {
        console.error('Error fetching job applications:', error);
      }
    );
  }

  // View a specific job application - opens the modal
  viewJobApplication(jobApplicationId: number): void {
    this.selectedJobApplication = this.jobApplications.find(
      (job) => job.id === jobApplicationId
    ) || null;
  }

  // Close the modal
  closeModal(): void {
    this.selectedJobApplication = null;
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
