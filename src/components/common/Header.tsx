import logo from "../assets/images/LogoCodmoreHDB.webp";
import Image from "next/image";
import Link from "next/link";
import { ContactUs } from "~/features/contact-us/ui";

export default function Header() {
  return (
    <>
      <header className="absolute top-0 w-screen z-50">
        <div className="flex justify-between">
          <Link href="/" passHref>
            <figure className="mx-8 p-0">
              <Image
                src={logo}
                alt="codmore_logo"
                width="225"
                height="150"
                className="cursor-pointer"
              />
            </figure>
          </Link>
          <div className="flex flex-col justify-evenly overflow-x-hidden pl-14">
            <ContactUs />
          </div>
        </div>
      </header>
    </>
  );
}
