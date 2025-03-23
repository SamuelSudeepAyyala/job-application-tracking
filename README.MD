# Job Application Tracking System

## Overview
This is a web-based Job Application Tracking System that helps users manage their job applications efficiently. It allows users to register, log in, and track job applications manually by entering job post URLs. The system is built using **C# (.NET Core)** for the backend and **Angular** for the frontend.

## Features
- **User Authentication**: Register and login with ASP.NET Identity
- **Job Application Management**: Add, edit, and track job applications
- **Database Integration**: Uses Entity Framework Core with SQL Server
- **Secure API**: Implements authentication and authorization for endpoints

## Technologies Used
- **Backend**: ASP.NET Core, Entity Framework Core, Identity
- **Frontend**: Angular
- **Database**: SQL Server
- **Other Tools**: Swagger for API testing, Docker (if needed)

## Getting Started
### Prerequisites
Make sure you have the following installed:
- .NET 6.0 or later
- Node.js and Angular CLI (if working on the frontend)
- SQL Server

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/job-application-tracking.git
   cd job-application-tracking
   ```
2. Update the connection string in `appsettings.json`.
3. Run the following commands:
   ```sh
   dotnet restore
   dotnet ef database update
   dotnet run
   ```
4. The backend should now be running on `https://localhost:7283/`.

### Frontend Setup (Angular)
1. Navigate to the frontend folder:
   ```sh
   cd job-application-tracking.Client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the Angular development server:
   ```sh
   ng serve
   ```
4. The frontend should now be available at `http://localhost:4200/`.

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | Register a new user |
| `/api/auth/login` | POST | Login and get a token |
| `/api/jobs` | GET | Fetch all job applications |
| `/api/jobs/{id}` | GET | Get details of a specific job application |
| `/api/jobs` | POST | Add a new job application |
| `/api/jobs/{id}` | PUT | Update an existing job application |
| `/api/jobs/{id}` | DELETE | Delete a job application |

## Troubleshooting
If you encounter any issues:
- Check if the database is correctly set up (`dotnet ef database update`)
- Ensure the backend is running before making API calls
- Check the browser console and network tab for frontend errors

## Future Enhancements
- Implement job scraping for automated tracking
- Add notifications and reminders for job application statuses
- Improve UI/UX with additional filters and sorting options

## License
This project is licensed under the MIT License. Feel free to contribute and improve the system!

