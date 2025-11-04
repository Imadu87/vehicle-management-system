"use client";

import MultiStepModal from "@/components/MultiStepModal";
import AddDriverForm from "./AddDriverForm";
import AddressForm from "./AddressForm";

export default function AddCompanyModal() {
  const steps = [AddDriverForm, AddressForm];

  return (
    <MultiStepModal
      steps={steps}
      buttonLabel="+ Add Driver"
      title="Add Driver"
    />
  );
}

