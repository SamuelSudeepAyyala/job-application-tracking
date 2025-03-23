import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private apiUrl = `${environment.apiUrl}/JobApplication`;

  constructor(private http: HttpClient) { }

  getAllJobApplications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addJobApplication(jobApplication: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, jobApplication);
  }

  updateJobApplication(id: number, jobApplication: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, jobApplication);
  }

  deleteJobApplication(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
