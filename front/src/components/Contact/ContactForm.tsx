"use client";

import { RecaptchaScript } from "../Utils/ReCaptchaV3";
import useContactFormAction from "@/src/customHooks/useContactFormAction";
import ContactInput from "./ContactInput";
import ContactSelect from "./ContactSelect";
import useContactForm from "@/src/customHooks/useContactForm";
import ContactModal from "./ContactModal";
import ContactCheckbox from "./ContactCheckbox";

export default function Form() {
  const {
    showModal,
    error,
    leadId,
    pending,
    handleSubmit,
    setShowModal
  } = useContactFormAction();
  const {
    fields,
    errors,
    touched,
    canSubmit,
    handleChange,
    handleBlur,
    handleSelectChange,
    handleCheckboxChange,
  } = useContactForm();

  return (
    <>
      <div className="flex flex-col gap-4 p-6 border border-gray-300 rounded-md w-[90%] sm:w-3/4 md:w-1/2 xl:w-[500px] 2xl:w-[450px]">
        <div>
          <h1 className="text-2xl font-bold text-primary">Unete a FinColombia</h1>
          <p className="text-gray-500">Completa el formulario para darte a conocer nuestros productos financieros.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            id="documentType"
            name="documentType"
            error={errors.documentType || ''}
            touched={touched.documentType}
            options={[
              { label: "Selecciona un tipo de identificación", value: "", isDefault: true },
              { label: "Cédula de ciudadanía", value: "CC" },
              { label: "Cédula de extranjería", value: "CE" },
              { label: "Pasaporte", value: "PP" },
              { label: "NIT", value: "NIT" },
              { label: "RUC", value: "RUC" },
            ]}
            placeholder="Tipo de identificación"
            value={fields.documentType}
            onChange={handleSelectChange}
            onBlur={handleBlur}
          />
          <ContactInput
            label="Identificación"
            id="documentNumber"
            name="documentNumber"
            placeholder="Identificación"
            type="text"
            value={fields.documentNumber}
            touched={touched.documentNumber}
            error={errors.documentNumber || ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ContactCheckbox
            label="Acepto los términos y condiciones"
            id="termsAndConditions"
            name="termsAndConditions"
            checked={fields.termsAndConditions}
            onChange={handleCheckboxChange}
            onBlur={handleBlur}
            error={errors.termsAndConditions || ''}
            touched={touched.termsAndConditions}
          />
          <button
            disabled={pending || !canSubmit}
            type="submit"
            className="bg-primary text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
      {showModal && <ContactModal error={error} leadId={leadId} setShowModal={setShowModal} />}
    </>
  );
}
