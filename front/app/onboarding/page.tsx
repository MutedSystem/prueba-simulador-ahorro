import ContactForm from '@/src/components/Contact/ContactForm'
import React from 'react'

const OnboardingPage = () => {
  return (
    <main className='p-10 flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-2xl font-bold'>Onboarding</h1>
        <ContactForm />
    </main>
  )
}

export default OnboardingPage