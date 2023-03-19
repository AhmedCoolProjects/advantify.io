import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { FormInput } from "../../components";

const ContactUsPage: NextPage = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Contact us | ADVANTIFY.IO</title>
      </Head>
      <h1 className="text-4xl font-semibold my-8">Contact Us</h1>
      <main className="w-11/12 sm:w-3/4 grid sm:grid-cols-2 grid-cols-1 gap-8">
        <FormInput
          info={info}
          setInfo={setInfo}
          placeholder="your name"
          label="What's your name?"
          required={true}
          type="text"
          value="name"
        />
        <FormInput
          info={info}
          setInfo={setInfo}
          placeholder="your email"
          label="What's your email?"
          required={true}
          type="email"
          value="email"
        />
        <FormInput
          info={info}
          setInfo={setInfo}
          placeholder="your phone number"
          label="What's your phone number?"
          required={true}
          type="phone"
          value="phone"
        />
        <FormInput
          info={info}
          setInfo={setInfo}
          placeholder="your message"
          label="Type your message here"
          required={true}
          type="text"
          value="message"
        />
        <div />
        <button
          disabled={!info.name || !info.email || !info.message}
          className="btn w-full btn-primary">
          Send Message
        </button>
      </main>
    </div>
  );
};

export default ContactUsPage;
