"use client";

import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { FC } from "react";
import { z } from "zod";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { IJobFields } from "@/types";
import { useFormState } from "react-dom";
import { createJob } from "@/lib/actions";

interface JobFormProps {}

const formSchema = z.object({
  company: z.string({
    required_error: "Please add a Company",
  }),
  position: z.string().min(1),
  status: z.string().min(1),
  jobtype: z.string().min(1),
  location: z.string().min(1),
  joblink: z.string().min(1),
});

const JobForm: FC<JobFormProps> = ({}) => {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createJob, initialState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      position: "",
      status: "",
      jobtype: "",
      location: "",
      joblink: "",
    },
  });
  return (
    <Form {...form}>
      <form action={createJob}>
        <div className="grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FormField
            name="company"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="company">Company</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="company"
                    placeholder="J-SPROUT ENTERPRISES"
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="position"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="company">Position</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="position"
                    placeholder="Software Developer"
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="status"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="company">Status</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="status"
                    placeholder="Interviewed"
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="jobtype"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="company">Job Type</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="jobtype"
                    placeholder="Contract"
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="location"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="location">Location</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="location"
                    placeholder="London"
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="joblink"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="joblink">Job link</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="joblink"
                    placeholder="https://google.com"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-auto">
            Add Job
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default JobForm;
