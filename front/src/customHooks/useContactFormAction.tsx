"use client";
import { uploadLeadAction } from "@/app/actions/uploadLeadAction";
import { startTransition, useActionState, useEffect, useState } from "react";
import { getRecaptchaToken } from "../utils/getRecaptchaToken";

function useContactFormAction() {  
  
  const [showModal, setShowModal] = useState(false);
  const [state, action, pending] = useActionState(uploadLeadAction, { success: false, runs: 0 });
  
  const { error, leadId, runs } = state;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const token = await getRecaptchaToken("contact");
    formData.set("recaptchaToken", token);
    startTransition(() => {
      action(formData);
    });
  };

  useEffect(() => {
    if (runs === 0) return;
    setTimeout(() => {
      setShowModal(true);
    }, 100);
  }, [runs]);

  return { showModal, error,leadId, pending, handleSubmit, setShowModal };
}

export default useContactFormAction;
