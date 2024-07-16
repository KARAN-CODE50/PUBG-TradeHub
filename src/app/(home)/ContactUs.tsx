"use client"
import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { User, Mail, Send, Check, CircleCheck } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion"
import { z } from "zod"

interface ContactData {
    name: string,
    email: string,
    message: string
}

interface resData {
    send: string,
    email: string
}

interface ContactFormProps {
    formData: ContactData,
    setFormData: React.Dispatch<React.SetStateAction<ContactData>>,
    errors: Partial<ContactData>,
    setErrors: React.Dispatch<React.SetStateAction<Partial<ContactData>>>,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setResponse: React.Dispatch<React.SetStateAction<resData | null>>
}

const validationSchema = z.object({
    name: z.string().min(1, 'Full Name is Required'),
    email: z.string().email('Invalid Email Address'),
    message: z.string().min(1, 'Message is Required')
})

export default function ContactUs() {
    const [formData, setFormData] = useState<ContactData>({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState<Partial<ContactData>>({});
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [response, setResponse] = useState<resData | null>(null);

    useEffect(() => {
        if (openModal) {
            const timer = setTimeout(() => {
                setOpenModal(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [openModal]);

    return (
        <div className='md:my-[8%] mb-[8%] mt-[15%] font-manrope relative'>
            <AnimatePresence>
                {openModal && response &&
                    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className='border-2 text-green-400 absolute top-0 left-0 right-0 w-[20em] gap-5 h-[15em] bg-secondary-two z-50 rounded-lg p-5 flex flex-col justify-center items-center text-center mx-auto'>
                        <CircleCheck size={60} /> <div className='text-lg'>{response.send} <br /> <span className=' text-sm text-green-200 '>We will try to get back to you at the shortest</span></div>
                    </motion.div>
                }
            </AnimatePresence>
            <div className='flex justify-center mb-8 items-center gap-5'>
                <div className=' opacity-50 w-[20em] bg-gradient-to-l from-white to-primary h-[0.2em] rounded-full bg-white' />
                <p className='md:text-3xl text-2xl text-nowrap text-center md:font-semibold'>Contact Us</p>
                <div className=' opacity-50 w-[20em] bg-gradient-to-r from-white to-primary h-[0.2em] rounded-full bg-white' />
            </div>
            <div className='md:mx-[13%] mx-[8%]'>
                <ContactForm formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} setOpenModal={setOpenModal} setResponse={setResponse} />
            </div>
        </div>
    )
}

function ContactForm({ formData, setFormData, errors, setErrors, setOpenModal, setResponse }: ContactFormProps) {

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }, [setFormData])

    const submitData = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = validationSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = result.error.format();
            setErrors({
                name: fieldErrors.name?._errors[0],
                email: fieldErrors.email?._errors[0],
                message: fieldErrors.message?._errors[0],
            });
            return;
        }

        const { name, email, message } = formData;
        // console.log(name, email,message);

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        })

        const data = await response.json();
        console.log(data)
        setResponse(data);

        setOpenModal(prevData => !prevData);
        setFormData({
            name: '',
            email: '',
            message: ''
        })
        setErrors({});
    }, [formData, setFormData, setErrors])


    return (
        <form onSubmit={submitData} className=' space-y-5'>
            <div className='flex md:flex-row flex-col md:space-x-5 gap-4'>
                <div
                    className={`flex-1 bg-secondary flex pl-3 py-1 gap-2 items-center border-2 border-white border-opacity-25 rounded-md ${errors.name ? 'border-red-500 border-opacity-70' : 'none'}`}>
                    <User size={22} />
                    <input value={formData.name} onChange={handleChange} name='name' placeholder='Full Name' className='p-2 flex-1 bg-secondary rounded-md focus:outline-none'></input>
                </div>
                <div
                    className={`flex-1 bg-secondary flex pl-3 py-1 gap-2 items-center border-2 border-white border-opacity-25 rounded-md ${errors.email ? 'border-red-500 border-opacity-70' : 'none'}`}>
                    <Mail size={22} />
                    <input value={formData.email} onChange={handleChange} name='email' placeholder='Email Address' className='p-2 flex-1 bg-secondary rounded-md focus:outline-none' />
                </div>
            </div>
            <textarea
                value={formData.message}
                name='message'
                onChange={handleChange}
                placeholder='Your message here'
                className='p-2 w-full min-h-32 max-h-32 rounded-[5px] bg-secondary border-2 border-white border-opacity-25'
            />
            <div className='flex justify-end'>
                <button type='submit' className='inline-flex justify-end items-center gap-4 py-3 px-8 rounded-md bg-secondary-two hover:bg-primary-two cursor-pointer'>
                    <Send size={20} />
                    <p className=' font-semibold font-manrope text-lg'>Send</p>
                </button>
            </div>
        </form>
    )
}
