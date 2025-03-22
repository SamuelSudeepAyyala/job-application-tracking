namespace JobApplicationTracking.Server.Data
{
    public class JobApplication
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public string CompanyName { get; set; }
        public string JobTitle { get; set; }
        public string JobDescription { get; set; }
        public string Status { get; set; }
        public DateTime AppliedDate { get; set; }
        public DateTime? InterviewDate { get; set; }
        public DateTime? OfferDate { get; set; }
        public DateTime? RejectionDate { get; set; }
    }
}
