import Buttons from "@/components/Buttons";
import Status from "@/components/Status";

export default function AddManuForm() {
  return (
    <form className="flex flex-col gap-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          // required
          className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          // required
          className="w-full border rounded-md px-3 py-6 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
        />
      </div>

      {/* Status */}
      <Status />
      <Buttons />
    </form>
  );
}
