"use client";
import React from "react";
import { useFormStatus } from "react-dom";

type ContactButtonProps = {
  canSubmit: boolean;
}

const ContactButton = ({ canSubmit }: ContactButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || !canSubmit}
      type="submit"
      className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
};

export default ContactButton;
