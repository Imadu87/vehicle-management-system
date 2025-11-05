import Header from "@/components/Header";
import BalanceTable from "./components/BalanceTable";

export default function Balance() {
  return (
    <div className="pt-20 ml-16 md:ml-60 min-h-screen bg-[#F9FAFB] p-6">
      <Header title={"Balance"} />
      <BalanceTable />
    </div>
  );
}
