"use client";

import { useEffect, useState } from "react";
import Modal from "../Utils/Modal";
import { RecaptchaScript } from "../Utils/ReCaptchaV3";
import useContactFormAction from "@/src/customHooks/useContactFormAction";
import ContactButton from "./ContactButton";

export default function Form() {

  const {formAction, state} = useContactFormAction();
  const { error, success } = state;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(success === false && error !== undefined && error !== '' && error !== null);
    }, 100);
  }, [success, error]);

  return (
    <>
      <form action={formAction}>
        <RecaptchaScript />
        <input type="hidden" name="recaptchaToken" id="recaptchaToken" />
        <ContactButton />
      </form>
      {showModal && <Modal onClose={() => setShowModal(false)}>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-2xl font-bold">Error</h2>
          <p>{error}</p>
          <button onClick={() => setShowModal(false)}>Cerrar</button>
        </div>
      </Modal>}
    </>
  );
}
