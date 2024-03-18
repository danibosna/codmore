import logo from "../assets/images/LogoCodmoreHDB.webp";
import Image from "next/image";
import Link from "next/link";
import { ContactUs } from "~/features/contact-us/ui";

export default function Header() {
  return (
    <>
      <header className="absolute top-0 w-full z-50">
        <div className="w-full flex items-center justify-between">
          <div className="">
          <Link href="/" passHref>
              <Image
                className="cursor-pointer"
                src={logo}
                alt="codmore_logo"
                width="175"
              />
          </Link>
          </div>
          <div className="flex pl-9 right-0 flex-col fixed z-50 justify-evenly overflow-x-hidden">
            <ContactUs />
          </div>
        </div>
      </header>
    </>
  );
}
