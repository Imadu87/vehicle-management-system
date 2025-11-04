import Header from "@/components/Header";
import CompanyTable from "./components/CompanyTable";

export default function Companies() {
  return (
    <div className="pt-20 ml-16 md:ml-60 min-h-screen bg-[#F9FAFB] p-6">
      <Header title={"Companies"} />
      <CompanyTable />
    </div>
  );
}
