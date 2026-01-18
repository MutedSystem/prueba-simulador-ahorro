import React, { Dispatch, SetStateAction } from 'react';
import Modal from '../Utils/Modal';

type ContactModalProps = {
  error?: string;
  leadId?: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ContactModal = ({ error, leadId, setShowModal }: ContactModalProps) => {
  return (
    <Modal onClose={() => setShowModal(false)}>
      <div className="flex flex-col gap-2 items-center justify-center">
        {
          error && (
            <>
              <h2 className="text-2xl font-bold text-red-500">Error</h2>
              <p>{error}</p>
              <button className="bg-primary text-white p-2 rounded-md" onClick={() => setShowModal(false)}>Cerrar</button>
            </>
          )
        }
        {
          leadId && (
            <>
              <h2 className="text-2xl font-bold text-primary">Hemos obtenido tu información</h2>
              <p>Te contactaremos lo antes posible para continuar con el proceso de onboarding.</p>
              <p>Tu ID del proceso es: <span className="font-bold text-primary">{leadId}</span></p>
              <button className="bg-primary text-white p-2 rounded-md" onClick={() => setShowModal(false)}>Cerrar</button>
            </>
          )
        }
      </div>
    </Modal>
  );
};

export default ContactModal;