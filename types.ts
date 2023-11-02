export interface IJob {
  id: string;
  company: string;
  position: string;
  status: string;
  jobType: string;
  location?: string;
  date: string;
  jobLink?: string;
}
