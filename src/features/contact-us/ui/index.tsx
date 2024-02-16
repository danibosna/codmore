'use client'
import React, { useState } from "react";
import { ToggleButton } from "./toggle-button";
import { SocialLinks } from "./social-links";
import { MailchimpInput } from "./mailchimp-input";

export const ContactUs = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={`relative ${
          isVisible ? "animate-slide-in" : "animate-slide-out -right-full"
        }`}>
      <ToggleButton onClick={() => toggleVisibility()} isVisible={isVisible} />
      <div
        className={`custom-newsletter text-center`}
      >
            <SocialLinks />
            <MailchimpInput />
      </div>
    </div>
  );
};
