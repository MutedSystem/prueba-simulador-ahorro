import ContactForm from '@/src/components/Contact/ContactForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Unete a FinColombia",
  description: "Únete a FinColombia y accede a nuestros productos financieros diseñados para satisfacer tus necesidades financieras.",
};

const OnboardingPage = () => {
  return (
    <main className='py-10 flex flex-col gap-4 items-center justify-center'>
      <ContactForm />
    </main>
  );
};

export default OnboardingPage;