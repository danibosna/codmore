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
    <section className="inline-flex px-10 pt-4 flex-col top-20 justify-self-center custom-container">
      <h2 className="text-4xl text-indigo-50 font-bold">Contact.</h2>
      <div className="flex pt-4">
        <div className="flex flex-col px-6">
          <form ref={form} action={`https://formspree.io/f/${formKey}`} onSubmit={handleSubmit} method="POST" encType="text/plain">
            <Input tag="input" label="*Name" forLabel="name" name="name" type="text" id="name" placeholder="Ej. Daniel" autocomplete="autocomplete" required="required" />

            <Input tag="input" label="E-mail" forLabel="email" name="email" type="email" id="email" placeholder="example@email.com" required="required" />

            <Input tag="input" label="Telf." forLabel="phone" name="phone" type="tel" id="phone" placeholder="+00 33 3322 3322" />

            <Input tag="input" label="Website" forLabel="website" name="website" type="url" id="website" placeholder="https://www.tuweb.com" />

            <Input tag="textarea" label="Quieres saber mas? Dejanos tus dudas y te contactamos" forLabel="message" name="message" id="message" cols="20" rows="5" />

            <button type="submit" disabled={formState.submitting}>
              <ChevronDoubleRightIcon className="h-12 w-12 text-indigo-600" />
            </button>
          </form>
        </div>
        <div className="flex items-center px-6">
          <Image src={qr} alt="qr" width="260" height="260" layout="intrinsic" />
        </div>
      </div>
    </section>
  );
};

export default ContactSect;
