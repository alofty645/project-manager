import { Metadata } from "next";
import Topbar from "@/components/topbar/topbar";
import Kanban from "@/components/kanban/kanban";

export const metadata: Metadata = {
  title: "Manufacturing",
  description: "Manufacturing",
};

export default function Home() {
  return (
    <div>
      <Topbar></Topbar>
      <h1 className="text-center">Manufacturing</h1>
    </div>
  );
}
