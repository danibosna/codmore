'use client'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "http://eepurl.com/iJwl9o";

export const MailchimpInput = () => (
  <div className="p-2">
    <MailchimpSubscribe
      url={url}
    />
  </div>
)
