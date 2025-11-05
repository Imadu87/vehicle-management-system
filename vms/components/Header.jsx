import AddCompanyModal from "@/app/(dashboard)/Companies/components/AddCompanyModal";
import AddDocumentModal from "@/app/(dashboard)/documentManagement/components/AddDocumentModal";
import AddDriverModal from "@/app/(dashboard)/getAllDriver/components/AddDriverModal";
import AddManufacturesModal from "@/app/(dashboard)/manufacturers/components/AddManufactures";

export default function Header({ title }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          <div className="w-full h-[3px] bg-[#38384A] mt-2"></div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <p className="text-gray-700 text-sm">Show</p>
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <p className="text-gray-700 text-sm">entries</p>
          {title === "Driver" && (
            <input
              type="text"
              placeholder="Search by name"
              className="border rounded-md px-3 py-2 text-sm w-full sm:w-[250px]"
            />
          )}
          {title === "Companies" && (
            <input
              type="text"
              placeholder="Search by Company name"
              className="border rounded-md px-3 py-2 text-sm w-full sm:w-[250px]"
            />
          )}
          {title === "Document Management" && (
            <input
              type="text"
              placeholder="Search by Document type"
              className="border rounded-md px-3 py-2 text-sm w-full sm:w-[250px]"
            />
          )}
          {title === "Balance" && (
            <input
              type="text"
              placeholder="Search by Email"
              className="border rounded-md px-3 py-2 text-sm w-full sm:w-[250px]"
            />
          )}
          {title === "My Cars" && (
            <input
              type="text"
              placeholder="Search by Manufacture"
              className="border rounded-md px-3 py-2 text-sm w-full sm:w-[250px]"
            />
          )}
          {title === "Manufactures" && (
            <input
              type="text"
              placeholder="Search by Manufacture"
              className="border rounded-md px-3 py-2 text-sm w-full sm:w-[250px]"
            />
          )}
        </div>

        {title === "Driver" && (
          <div className="flex flex-wrap gap-3 justify-end">
            <button className="bg-[#38384A] hover:bg-black text-white px-4 py-2 rounded-lg text-sm">
              Assign Vehicle
            </button>
            <button className="bg-[#38384A] hover:bg-black text-white px-4 py-2 rounded-lg text-sm">
              Add Document
            </button>

            {/* ✅ Replace + Add Driver button & modal with this */}
            <AddDriverModal />
          </div>
        )}
        {title === "Companies" && <AddCompanyModal />}
        {title === "Document Management" && <AddDocumentModal />}
        {title === "Manufactures" && <AddManufacturesModal />}
      </div>
    </>
  );
}
