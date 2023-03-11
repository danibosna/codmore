/* This example requires Tailwind CSS v2.0+ */
import logo from '@assets/images/LogoCodmoreHDB.webp';
import twitter from '@assets/images/407-twitter.svg';
import instagram from '@assets/images/instagram.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="fixed w-screen top-0 z-90">
        <div className="flex justify-between mx-8">
          <Link href="/" passHref>
            <figure className="p-0 m-0">
              <Image src={logo} alt="codmore_logo" width="225" height="150" className="cursor-pointer" />
            </figure>
          </Link>
          <div className="flex flex-col justify-evenly">
            <Link href="https://twitter.com/" passHref>
              <figure className="p-0 m-0">
                <Image src={twitter} alt="twitter" width="20" height="20" className="cursor-pointer" />
              </figure>
            </Link>
            <Link href="https://instagram.com/" passHref>
              <figure className="p-0 m-0">
                <Image src={instagram} alt="instagram" width="20" height="20" className="cursor-pointer" />
              </figure>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
