"use client";

import MultiStepModal from "@/components/MultiStepModal";
import AddCompanyForm from "./AddCompanyForm";
import LetterConfigurationForm from "./LetterConfiguration";

export default function AddCompanyModal() {
  const steps = [AddCompanyForm, LetterConfigurationForm];

  return (
    <MultiStepModal
      steps={steps}
      buttonLabel="+ Add Company"
      title="Add Company"
    />
  );
}
