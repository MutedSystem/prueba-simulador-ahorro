import { uploadLeadAction } from "@/app/actions/uploadLeadAction";
import { useActionState, useEffect, useState } from "react";

function useContactFormAction() {
  const [state, formAction] = useActionState(uploadLeadAction, { success: false });
  const { error, success } = state;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(success === false && error !== undefined && error !== '' && error !== null);
    }, 100);
  }, [success, error]);
  return { showModal, error, formAction, setShowModal };
}

export default useContactFormAction;
