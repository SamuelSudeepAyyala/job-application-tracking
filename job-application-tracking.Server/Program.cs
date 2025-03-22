using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add Swagger/OpenAPI support
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Job Application Tracking API", Version = "v1" });
});

var app = builder.Build();

// Enable middleware to serve generated Swagger as a JSON endpoint.
app.UseSwagger();

// Enable middleware to serve Swagger UI (HTML, JS, CSS, etc.)
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Job Application Tracking API v1");
});

// Enable CORS if necessary
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
