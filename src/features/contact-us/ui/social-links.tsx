import Link from "next/link";
import React from "react";
import { FaXTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <div className="flex w-full justify-center py-2">
      <Link href="https://twitter.com/@codmoretech" passHref>
        <FaXTwitter className="w-8" size={25} />
      </Link>
      <Link href="https://twitter.com/@codmoretech" passHref>
        <FaWhatsapp className="w-8" size={25} />
      </Link>
      <Link href="https://twitter.com/@codmoretech" passHref>
        <FaLinkedin className="w-8" size={25} />
      </Link>
    </div>
  );
};
