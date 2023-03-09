import React, { useRef } from 'react';
import Image from 'next/image';
import Input from '@components/ContactSect/Input';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import qr from '@assets/images/ws_qr_code.png';
import { useForm } from '@formspree/react';
import { useRouter } from 'next/router';

const formKey = process.env.NEXT_PUBLIC_FORM_CONTACT;

const ContactSect = () => {
  const router = useRouter();
  const [formState, setFormState] = useForm(`"${formKey}"`);

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formCurrent = form.current;
    const formData = new FormData(formCurrent);
    const data = {
      username: formData.get('name'),
      email: formData.get('email'),
      telf: formData.get('phone'),
      website: formData.get('website'),
      message: formData.get('message'),
    };
    setFormState(data);

    router.push('/');
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <div className="inline-flex h-4/5 w-3/4 mx-2 mt-12 px-5 md:px-10 py-4 flex-col custom-container">
        <h2 className="text-4xl text-slate-50 font-bold">Contact.</h2>
        <div className="flex flex-col lg:justify-around md:flex-row pt-4 overlay hid-scroll">
          <div className="flex flex-col px-6 md:w-2/4">
            <form ref={form} method="POST" encType="text/plain" action={`https://formspree.io/f/${formKey}`} onSubmit={handleSubmit}>
              <Input tag="input" label="*Nombre" forLabel="name" name="name" type="text" id="name" placeholder="Ej. Daniel" autocomplete="autocomplete" required />

              <Input tag="input" label="E-mail" forLabel="email" name="email" type="email" id="email" placeholder="example@email.com" required />

              <Input tag="input" label="Telf." forLabel="phone" name="phone" type="tel" id="phone" placeholder="+00 33 3322 3322" />

              <Input tag="input" label="Website" forLabel="website" name="website" type="url" id="website" placeholder="https://www.tuweb.com" />

              <Input tag="textarea" label="Quieres saber mas?" forLabel="message" name="message" id="message" cols={20} rows={5} />

              <button type="submit" disabled={formState.submitting}>
                <ChevronDoubleRightIcon className="h-12 w-12 text-slate-400" />
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center p-6">
            <Image src={qr} alt="qr" width="260" height="260" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSect;
