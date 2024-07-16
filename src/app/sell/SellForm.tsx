"use client"
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import DragDrop from "./DragDrop";

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

    const [errors, setErrors] = useState<Partial<FormData>>({})

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }, [])

    const validate = useCallback((): Partial<FormData> => {
        const newErrors: Partial<FormData> = {}

        if (!formData.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid"
        }

        if (!formData.phoneNo) {
            newErrors.phoneNo = "Phone Number is required"
        } else if (!/^\d{10}$/.test(formData.phoneNo)) {
            newErrors.phoneNo = "Phone Number is invalid"
        }

        if (!formData.accName) newErrors.accName = "Account Name is required"
        if (!formData.level) newErrors.level = "Account Level is required"
        if (!formData.price) newErrors.price = "Price is required"
        if (!formData.desc) newErrors.desc = "Description is required"

        return newErrors
    }, [formData])

    const submitData = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setErrors({})
        console.log(formData);
        setFormData({
            email: "",
            phoneNo: "",
            accName: "",
            level: "",
            price: "",
            desc: ""
        })
        setSent(prevState => !prevState)
    }, [validate, formData, setSent])

    return (
        <form onSubmit={submitData} className='md:grid flex flex-col gap-3 md:grid-cols-5 md:grid-rows-6 md:gap-3 my-5'>
            <input value={formData.email} name='email' onChange={handleChange} placeholder='Email Address' className={`p-2 col-span-2 rounded-[5px] bg-secondary border-2 ${errors.email ? 'border-red-400' : 'border-secondary-two'}`} type="email" />
            {/* {errors.email && <span className="text-red-500 col-span-2">{errors.email}</span>} */}
            <input value={formData.phoneNo} name='phoneNo' onChange={handleChange} placeholder='Phone Number' className={`p-2 col-span-2 rounded-[5px] bg-secondary border-2 ${errors.phoneNo ? 'border-red-400' : 'border-secondary-two'}`} type="text" />
            {/* {errors.phoneNo && <span className="text-red-500 col-span-2">{errors.phoneNo}</span>} */}
            <input value={formData.accName} name='accName' onChange={handleChange} placeholder='Account Name' className={`p-2 row-start-2 col-span-2 rounded-[5px] bg-secondary border-2 ${errors.accName ? 'border-red-400' : 'border-secondary-two'}`} type="text" />
            {/* {errors.accName && <span className="text-red-500 col-span-2">{errors.accName}</span>} */}
            <input value={formData.level} name='level' onChange={handleChange} placeholder='Account Level' className={`p-2 row-start-2 rounded-[5px] bg-secondary border-2 ${errors.level ? 'border-red-400' : 'border-secondary-two'}`} type="number" />
            {/* {errors.level && <span className="text-red-500">{errors.level}</span>} */}
            <input value={formData.price} name='price' onChange={handleChange} placeholder='₹ Set Price' className={`p-2 row-start-2 rounded-[5px] bg-secondary border-2 ${errors.price ? 'border-red-400' : 'border-secondary-two'}`} type="number" />
            {/* {errors.price && <span className="text-red-500">{errors.price}</span>} */}
            <textarea value={formData.desc} name='desc' onChange={handleChange} placeholder='Account Description' className={`p-2 md:min-h-full md:max-h-[40px] min-h-[170px] max-h-[170px] row-start-3 row-span-3 col-span-4 rounded-md bg-secondary border-2 ${errors.desc ? 'border-red-400' : 'border-secondary-two'}`}></textarea>
            {/* {errors.desc && <span className="text-red-500 col-span-4">{errors.desc}</span>} */}
            <div className='row-span-5'>
                <DragDrop />
            </div>
            <button type='submit' className='font-semibold text-xl py-2 md:py-0 tracking-widest row-start-6 col-span-5 rounded-md bg-primary-two'>SUBMIT</button>
        </form>
    )
}

export default SellForm
