import { Metadata } from "next";
import Topbar from "@/components/topbar/topbar";
import Kanban from "@/components/kanban/kanban";

export const metadata: Metadata = {
  title: "Project Manager",
  description: "Project Manager",
};

export default function Home() {
  return (
    <div>
      <Topbar></Topbar>
      <Kanban></Kanban>
    </div>
  );
}
