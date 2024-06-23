"use client"
import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { Upload } from 'lucide-react'

interface FormData {
    email: string,
    phoneNo: string,
    accName: string,
    level: string,
    price: string,
    desc: string
}

interface SellFormProps {
    setSent: React.Dispatch<React.SetStateAction<boolean>>;
}

function SellForm({ setSent }: SellFormProps) {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        phoneNo: "",
        accName: "",
        level: "",
        price: "",
        desc: ""
    })

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }, [])

    const submitData = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({
            email: "",
            phoneNo: "",
            accName: "",
            level: "",
            price: "",
            desc: ""
        })
        console.log(formData);
    }, [formData])

    return (
        <form onSubmit={submitData} className='grid grid-cols-5 grid-rows-6 gap-3 my-5'>
            <input value={formData.email} name='email' onChange={handleChange} placeholder='Email Address' className='p-2 col-span-2 rounded-[5px] bg-secondary border-2 border-secondary-two' type="email" />
            <input value={formData.phoneNo} name='phoneNo' onChange={handleChange} placeholder='Phone Number' className='p-2 col-span-2 rounded-[5px] bg-secondary border-2 border-secondary-two' type="number" />
            <input value={formData.accName} name='accName' onChange={handleChange} placeholder='Account Name' className=' p-2 row-start-2 col-span-2 rounded-[5px] bg-secondary border-2 border-secondary-two' type="text" />
            <input value={formData.level} name='level' onChange={handleChange} placeholder='Account Level' className=' p-2 row-start-2 rounded-[5px] bg-secondary border-2 border-secondary-two' type="number" />
            <input value={formData.price} name='price' onChange={handleChange} placeholder=' ₹ Set Price' className=' p-2 row-start-2 rounded-[5px] bg-secondary border-2 border-secondary-two' type="number" />
            <textarea value={formData.desc} name='desc' onChange={handleChange} placeholder='Account Description' className='p-2 min-h-full max-h-[40px] row-start-3 row-span-3 col-span-4 rounded-md bg-secondary border-2 border-secondary-two'></textarea>
            <div className=' row-span-5 border-secondary-two text-[#5a849f] border-[3px] bg-secondary border-dashed cursor-pointer flex flex-col items-center justify-center rounded-lg'>
                <Upload size={58} />
                <p className='font-semibold pb-2'>Add Images</p>
                <p className=''>Drag & Drop files here</p>
            </div>
            <button onClick={() => setSent(prevState => !prevState)} type='submit' className=' font-semibold text-xl tracking-widest row-start-6 col-span-5 rounded-md bg-primary-two'>SUBMIT</button>
        </form>
    )
}

export default SellForm