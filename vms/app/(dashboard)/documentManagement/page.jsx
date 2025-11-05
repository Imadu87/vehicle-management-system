import Header from "@/components/Header";
import DocumentTable from "./components/DocumentTable";

export default function DocManagement() {
  return (
    <div className="pt-20 ml-16 md:ml-60 min-h-screen bg-[#F9FAFB] p-6">
      <Header title={"Document Management"} />
      <DocumentTable />
    </div>
  );
}