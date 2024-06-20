import React from 'react'
import { CircleDollarSign } from 'lucide-react'
import SellForm from './SellForm'

function Sell() {
  return (
    <div className='mx-[9%] my-[5%]'>
        <div className='flex gap-2 items-center'>
            <CircleDollarSign size={30} />
            <p className=' font-manrope font-bold text-3xl'>SELL ACCOUNTS</p>
        </div>
        <SellForm />
    </div>
  )
}

export default Sell