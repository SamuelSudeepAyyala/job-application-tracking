import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobApplicationService } from '../../services/job-application/job-application.service';
import { uuid } from 'uuidv4'; 

@Component({
  selector: 'app-job-application-add',
  standalone: false,
  templateUrl: './job-application-add.component.html',
  styleUrl: './job-application-add.component.css'
})
export class JobApplicationAddComponent {
  jobTitle: string = '';
  company: string = '';
  applicationDate: string = '';
  status: string = '';
  notes: string = '';
  userId: any = localStorage.getItem('userId');

  constructor(private jobApplicationService: JobApplicationService, private router: Router) { }

  onSubmit(): void {
    const newJobApplication = {
      jobTitle: this.jobTitle,
      company: this.company,
      applicationDate: this.applicationDate,
      status: this.status,
      notes: this.notes,
      userId: this.userId
    };

    this.jobApplicationService.addJobApplication(newJobApplication).subscribe(
      (response) => {
        console.log('Job application added:', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error adding job application:', error);
      }
    );
  }
}
