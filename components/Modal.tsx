import { useState } from "react";
import { FormInput } from "./FormInput";
import SectionTitle from "./SectionTitle";

export default function Modal() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="flex flex-col items-center">
            <SectionTitle
              firstTitle=""
              secondTitle="for Updates"
              coloredTitle="Sign Up"
            />
            <main className="w-11/12 sm:w-full grid grid-cols-1 gap-4">
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

              <button
                disabled={!info.name || !info.email || !info.message}
                className="btn w-full btn-primary">
                Sign Up
              </button>
            </main>
          </div>
        </label>
      </label>
    </>
  );
}
