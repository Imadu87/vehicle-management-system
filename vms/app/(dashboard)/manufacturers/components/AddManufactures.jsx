'use client'
import SmallMultiStepModal from "@/components/SmallMultiStepModal";
import AddManuForm from "./AddManufactureForm";

export default function AddManufacturesModal() {
    const steps = [AddManuForm]
  return (
    <SmallMultiStepModal
      steps={steps}
      buttonLabel="+ Add Manufactures"
      title="Add Manufacturer"
    />
  );
}
