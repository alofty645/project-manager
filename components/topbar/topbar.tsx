import Image from "next/image";
import { MainNav } from "@/components/topbar/main-nav";
import { Search } from "@/components/topbar/search";
import { UserNav } from "@/components/topbar/user-nav";
import { ModeToggle } from "@/components/topbar/toggle";

export default function Topbar() {
  return (
    <div>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <ModeToggle />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
