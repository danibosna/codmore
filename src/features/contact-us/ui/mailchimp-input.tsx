'use client';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Button } from "~/components/ui/button";

const url = "http://eepurl.com/iJwl9o";

export const MailchimpInput = () => (
  <div className="p-2">
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <SimpleForm
          status={status}
          message={message}
          onSubmitted={formData => subscribe(formData)}
        />
      )}
    />
  </div>
);

const SimpleForm = ({ status, message, className, style, onSubmitted }: { 
  status: string | null; 
  message: string | Error | null; 
  className?: string; 
  style?: React.CSSProperties; 
  onSubmitted: (formData: { EMAIL: string }) => void; 
}) => {
  let input: HTMLInputElement | null;
  const submit = () => {
    if (input && input.value.indexOf("@") > -1) {
      onSubmitted({ EMAIL: input.value });
    }
  };

  return (
    <div className={className} style={style}>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message ?? "" }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message ?? "" }}
        />
      )}
      <div className="flex gap-2">
        <input
          ref={node => (input = node)}
          type="email"
          placeholder="Tu Correo (Newsletter)"
          className="custom-container placeholder:text-slate-400 text-white px-2"
        />
        <Button 
          variant={'custom'} 
          className="p-1 px-2 text-white font-semibold" 
          onClick={submit}
        >
          Subscribir
        </Button>
      </div>
    </div>
  );
};
