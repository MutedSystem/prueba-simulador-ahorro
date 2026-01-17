"use client";

import Modal from "../Utils/Modal";
import { RecaptchaScript } from "../Utils/ReCaptchaV3";
import useContactFormAction from "@/src/customHooks/useContactFormAction";
import ContactInput from "./ContactInput";
import ContactSelect from "./ContactSelect";
import useContactForm from "@/src/customHooks/useContactForm";

export default function Form() {
  const { showModal, error, leadId,pending, handleSubmit, setShowModal } = useContactFormAction();
  const { fields, errors, touched, canSubmit, handleChange, handleBlur, handleSelectChange } = useContactForm();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <RecaptchaScript />
        <ContactInput 
          label="Nombre"
          id="name"
          name="name"
          placeholder="Nombre"
          type="text"
          value={fields.name}
          touched={touched.name}
          error={errors.name || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ContactInput 
          label="Email"
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          value={fields.email}
          touched={touched.email}
          error={errors.email || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ContactSelect 
          label="Tipo de identificación"
          id="identificationType"
          name="identificationType"
          options={[
            { label: "Selecciona un tipo de identificación", value: "", isDefault: true },
            { label: "Cédula de ciudadanía", value: "CC" },
            { label: "Cédula de extranjería", value: "CE" },
            { label: "Pasaporte", value: "PP" },
            { label: "NIT", value: "NIT" },
            { label: "RUC", value: "RUC" },
          ]}
          placeholder="Tipo de identificación"
          value={fields.identificationType}
          onChange={handleSelectChange}
        />
        <ContactInput 
          label="Identificación"
          id="identification"
          name="identification"
          placeholder="Identificación"
          type="text"
          value={fields.identification}
          touched={touched.identification}
          error={errors.identification || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button
          disabled={pending || !canSubmit}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {showModal && <Modal onClose={() => setShowModal(false)}>
        <div className="flex flex-col gap-2 items-center justify-center">
          {
            error && (
              <>
                <h2 className="text-2xl font-bold">Error</h2>
                <p>{error}</p>
                <button onClick={() => setShowModal(false)}>Cerrar</button>
              </>
            )
          }
          {
            leadId && (
              <>
                <h2 className="text-2xl font-bold">Hemos obtenido tu información</h2>
                <p>Te contactaremos lo antes posible para continuar con el proceso de onboarding.</p>
                <p>Tu ID del proceso es: {leadId}</p>
                <button onClick={() => setShowModal(false)}>Cerrar</button>
              </>
            )
          }
        </div>
      </Modal>}
    </>
  );
}
