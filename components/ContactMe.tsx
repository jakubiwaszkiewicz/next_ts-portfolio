import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler} from 'react-hook-form';

type Props = {}

type Inputs = {
  name: string;
  email: string,
  subject: string,
  message: string,
};

function ContactMe({}: Props) {

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<Inputs> = ((formData: any) => 
    window.location.href = `mailto: kkuba.iwaszkiewicz@gmail?subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  );

  return (
    <div className='relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h1>

        <div className='flex flex-col space-y-10'>
          <h4 className='text-4xl font-semibold text-center'>
            If I've got just what you need,
            <br />
            <span className='underline decoration-[#AA4A44]/70 underline-offset-8'>Let's talk!</span> 
          </h4>

          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon
              className='animate-pulse h-7 w-7 text-[#AA4A44]'
            />
            <p className="text-2xl">+48536173333</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon
              className='animate-pulse h-7 w-7 text-[#AA4A44]'
            />
            <p className="text-2xl">kkuba.iwaszkiewicz@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon
              className='animate-pulse h-7 w-7 text-[#AA4A44]'
            />
            <p className="text-2xl">Poland - Wroclaw</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input {...register('name')} type="text" placeholder='Name' className='contactInput'/>
              <input {...register('email')} type="text" placeholder='Email' className='contactInput'/>
            </div>

            <input {...register('subject')} type="text" placeholder='Subject' className='contactInput'/>

            <textarea {...register('message')} placeholder='Message' className='contactInput'/>
            <button
              type="submit"
              className='heroButton text-xl rounded-lg border-gray-500'
            >
              Submit
            </button>
          </form>

        </div>
    </div>
  )
}

export default ContactMe