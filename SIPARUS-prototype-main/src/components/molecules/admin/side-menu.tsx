import Image from "next/image";
import ItemMenu from "./item-menu";
import Title from "@/components/atomics/title";
import { Button } from "@/components/atomics/button";
import Link from "next/link";

function SideMenu() {
  return (
    <nav className="bg-white w-full max-w-[250px] px-6 py-[30px] rounded-[20px] h-fit">
      <Link href="/">
        <Image src="/images/logo.svg" alt="nidejia" height={36} width={133} />
      </Link>

      <div className="mt-[37.5px]">
        <h1 className="font-semibold text-sm leading-[21px]">General</h1>
        <ul className="mt-3.5 flex flex-col space-y-6">
          <ItemMenu image="/icons/card.svg" title="overview" url="/dashboard" />
          <ItemMenu
            image="/icons/card.svg"
            title="my transactions"
            url="/dashboard/my-transactions"
          />
        </ul>
      </div>
    </nav>
  );
}

export default SideMenu;
