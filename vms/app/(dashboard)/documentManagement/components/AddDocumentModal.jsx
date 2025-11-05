'use client'
import AddDocumentForm from "./AddDocumentForm";
import SmallMultiStepModal from "@/components/SmallMultiStepModal";

export default function AddDocumentModal() {
    const steps = [AddDocumentForm]
  return (
    <SmallMultiStepModal
      steps={steps}
      buttonLabel="+ Add Document Type"
      title="Add Document Type"
    />
  );
}
