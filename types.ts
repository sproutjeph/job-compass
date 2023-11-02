export interface IJob {
  company: string;
  posistion: string;
  status: "Interviewed" | "Declined" | "Pending";
  jobType: string;
  location?: string;
}
