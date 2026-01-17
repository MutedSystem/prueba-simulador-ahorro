"use client";

import Modal from "../Utils/Modal";
import { RecaptchaScript } from "../Utils/ReCaptchaV3";
import useContactFormAction from "@/src/customHooks/useContactFormAction";
import ContactButton from "./ContactButton";

export default function Form() {
  const { showModal, error, formAction, setShowModal } = useContactFormAction();

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
