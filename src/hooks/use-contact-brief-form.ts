import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactBriefSchema = z.object({
  name: z.string().min(2, "Name is required"),
  businessName: z.string().min(2, "Business name is required"),
  corporateEmail: z.email("Enter a valid corporate email"),
  phoneNumber: z.string().min(7, "Phone number is required"),
  inquiryDetails: z.string().min(24, "Please provide a brief challenge summary"),
});

type ContactBriefValues = z.infer<typeof contactBriefSchema>;

const defaultValues: ContactBriefValues = {
  name: "",
  businessName: "",
  corporateEmail: "",
  phoneNumber: "",
  inquiryDetails: "",
};

export function useContactBriefForm() {
  const [submittedAt, setSubmittedAt] = useState<number | null>(null);

  const form = useForm<ContactBriefValues>({
    resolver: zodResolver(contactBriefSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = form.handleSubmit(async () => {
    await new Promise((resolve) => setTimeout(resolve, 360));
    setSubmittedAt(Date.now());
    form.reset(defaultValues);
  });

  const submissionState = useMemo(() => {
    if (!submittedAt) {
      return {
        visible: false,
        message: "",
      };
    }

    return {
      visible: true,
      message: "Inquiry received. A consultant will respond within one business day.",
    };
  }, [submittedAt]);

  return {
    ...form,
    onSubmit,
    submissionState,
  };
}
