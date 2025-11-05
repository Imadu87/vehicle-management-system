import Header from "@/components/Header";
import CarsTable from "./components/CarsTable";

export default function Balance() {
  return (
    <div className="pt-20 ml-16 md:ml-60 min-h-screen bg-[#F9FAFB] p-6">
      <Header title={"My Cars"} />
      <CarsTable />
    </div>
  );
}
