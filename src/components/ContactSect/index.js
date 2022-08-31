import React, { useRef } from 'react';
import Image from 'next/image';
import Input from '@components/ContactSect/Input';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import qr from '@assets/images/ws_qr_code.png';
import { useForm } from '@formspree/react';

const formKey = process.env.NEXT_PUBLIC_FORM_CONTACT;

const ContactSect = () => {
  const [formState, setFormState] = useForm(`"${formKey}"`);

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('name'),
      email: formData.get('email'),
      telf: formData.get('phone'),
      website: formData.get('website'),
      message: formData.get('message'),
    };
    setFormState(data);
  };

  if (formState.succeeded) {
    return (window.location = '/');
  }

  return (
    <section className="inline-flex w-4/5 mx-2 h-3/4 md:h-4/5 px-10 py-4 flex-col top-32 justify-self-center custom-container">
      <h2 className="text-4xl text-slate-50 font-bold">Contact.</h2>
      <div className="flex flex-col lg:justify-around md:flex-row pt-4 overlay hid-scroll">
        <div className="flex flex-col px-6 md:w-2/4">
          <form ref={form} action={`https://formspree.io/f/${formKey}`} onSubmit={handleSubmit} method="POST" encType="text/plain">
            <Input tag="input" label="*Nombre" forLabel="name" name="name" type="text" id="name" placeholder="Ej. Daniel" autocomplete="autocomplete" required="required" />

            <Input tag="input" label="E-mail" forLabel="email" name="email" type="email" id="email" placeholder="example@email.com" required="required" />

            <Input tag="input" label="Telf." forLabel="phone" name="phone" type="tel" id="phone" placeholder="+00 33 3322 3322" />

            <Input tag="input" label="Website" forLabel="website" name="website" type="url" id="website" placeholder="https://www.tuweb.com" />

            <Input tag="textarea" label="Quieres saber mas?" forLabel="message" name="message" id="message" cols="20" rows="5" />

            <button type="submit" disabled={formState.submitting}>
              <ChevronDoubleRightIcon className="h-12 w-12 text-slate-400" />
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center p-6">
          <Image src={qr} alt="qr" width="260" height="260" layout="intrinsic" />
        </div>
      </div>
    </section>
  );
};

export default ContactSect;
