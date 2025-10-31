// "use client";
// import { useState } from "react";
// import AddDriverForm from "./AddDriverForm";
// import AddressForm from "./AddressForm";
// import Modal from "./Modal";

// export default function AddDriverSteps({ isOpen, onClose }) {
//   const [step, setStep] = useState(1);
//   const [driverData, setDriverData] = useState({});

//   const handleDriverSubmit = (data) => {
//     setDriverData(data);
//     setStep(2); // move to next step
//   };

//   const handleAddressSubmit = (addressData) => {
//     const finalData = { ...driverData, ...addressData };
//     console.log("Full Driver Data:", finalData);

//     // Submit API here...
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title="Add Driver">
//       {step === 1 && (
//         <AddDriverForm onSubmit={handleDriverSubmit} onCancel={onClose} />
//       )}

//       {step === 2 && (
//         <AddressForm
//           onSubmit={handleAddressSubmit}
//           onBack={() => setStep(1)}
//           onCancel={onClose}
//         />
//       )}
//     </Modal>
//   );
// }
