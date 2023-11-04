import JobForm from "@/components/job-form";
import { Card, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="m-8">
      <Card className="p-4">
        <CardTitle className="mb-4">Add Job</CardTitle>
        <JobForm />
      </Card>
    </main>
  );
}
