"use client";
import Modal from "./Modal";
import { useState } from "react";

export default function MultiStepModal({ steps, buttonLabel, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const CurrentForm = steps[step];

  const handleNext = (data) => {
    if (step < steps.length - 1) setStep(step + 1);
    else {
      console.log("FINAL DATA:", data);
      setIsOpen(false);
      setStep(0);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#38384A] hover:bg-black text-white px-4 py-2 rounded-md"
      >
        {buttonLabel}
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
        <CurrentForm
          onSubmit={handleNext}
          onBack={step > 0 ? () => setStep(step - 1) : null}
          onCancel={() => setIsOpen(false)}
        />
      </Modal>
    </>
  );
}
