"use client";
import Table from "./components/DriverTable";
import Header from "@/components/Header";

export default function GetAllDriver() {
  return (
    <div className="pt-20 ml-16 md:ml-60 min-h-screen bg-[#F9FAFB] p-6">
      <Header title={"Driver"}/>
      <Table />
    </div>
  );
}
