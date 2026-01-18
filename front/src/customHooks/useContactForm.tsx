"use client";

import { useMemo, useState } from "react";
import { emptyContactData } from "../emptyData/emptyContactData";

export type ContactFormFields = {
  name: string;
  email: string;
  identificationType: string;
  identification: string;
  termsAndConditions: boolean;
};

type ContactFormErrors = Partial<Record<keyof ContactFormFields, string>>;

type ContactFormTouched = Record<keyof ContactFormFields, boolean>;

function useContactForm() {
  const [fields, setFields] = useState<ContactFormFields>(emptyContactData);
  const [touched, setTouched] = useState<ContactFormTouched>({} as ContactFormTouched);

  const errors = useMemo(() => {
    const errors: ContactFormErrors = {};

    if (!fields.name) {
      errors.name = "El nombre es requerido";
    } else if (fields.name.length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres";
    } else if (fields.name.length > 100) {
      errors.name = "El nombre debe tener menos de 100 caracteres";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fields.email) {
      errors.email = "El email es requerido";
    } else if (!emailRegex.test(fields.email)) {
      errors.email = "El email debe ser válido";
    }

    if (!fields.identificationType) {
      errors.identificationType = "El tipo de identificación es requerido";
    }

    if (!fields.identification) {
      errors.identification = "La identificación es requerida";
    } else if (isNaN(Number(fields.identification))) {
      errors.identification = "La identificación debe ser un número válido";
    } else if (fields.identification.length < 5) {
      errors.identification = "La identificación debe tener al menos 5 caracteres";
    } else if (fields.identification.length > 100) {
      errors.identification = "La identificación debe tener menos de 100 caracteres";
    }

    if (!fields.termsAndConditions) {
      errors.termsAndConditions = "Debes aceptar los términos y condiciones";
    }

    return errors;
  }, [fields]);

  const canSubmit = useMemo(() => {
    return !errors.name && !errors.email && !errors.identificationType && !errors.identification && !errors.termsAndConditions;
  }, [errors]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }; 

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFields((prev) => ({ ...prev, [name]: checked }));
  };

  return {
    fields,
    errors,
    touched,
    canSubmit,
    handleChange,
    handleSelectChange,
    handleBlur,
    handleCheckboxChange,
  };
}

export default useContactForm;