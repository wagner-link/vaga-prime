export interface CandidateApplication {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  availability: 'part-time' | 'full-time' | 'freelancer';
  linkedinProfile?: string;
  dataConsent: boolean;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}