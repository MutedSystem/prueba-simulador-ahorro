import { uploadLeadAction } from "@/app/actions/uploadLeadAction";
import { useActionState } from "react";

function useContactFormAction() {
  const [state, formAction] = useActionState(uploadLeadAction, { success: false });
  return { state, formAction };
}

export default useContactFormAction;
