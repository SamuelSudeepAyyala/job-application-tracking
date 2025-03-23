import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationAddComponent } from './job-application-add.component';

describe('JobApplicationAddComponent', () => {
  let component: JobApplicationAddComponent;
  let fixture: ComponentFixture<JobApplicationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobApplicationAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
