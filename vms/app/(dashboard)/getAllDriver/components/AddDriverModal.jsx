"use client";
import { useState } from "react";
import Modal from "../../components/Modal";
import AddDriverForm from "./AddDriverForm";
import AddressForm from "./AddressForm";

export default function AddDriverModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [driverData, setDriverData] = useState({});

  const handleDriverSubmit = (data) => {
    setDriverData(data);
    setStep(2);
  };

  const handleAddressSubmit = (addressData) => {
    const finalData = { ...driverData, ...addressData };
    console.log("Final Data:", finalData);
    setIsOpen(false);
    setStep(1);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#38384A] hover:bg-black text-white px-4 py-2 rounded-md"
      >
        Add Driver
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Add Driver"
      >
        {step === 1 && (
          <AddDriverForm
            onSubmit={handleDriverSubmit}
            onCancel={() => setIsOpen(false)}
          />
        )}

        {step === 2 && (
          <AddressForm
            onSubmit={handleAddressSubmit}
            onBack={() => setStep(1)}
            onCancel={() => setIsOpen(false)}
          />
        )}
      </Modal>
    </>
  );
}
