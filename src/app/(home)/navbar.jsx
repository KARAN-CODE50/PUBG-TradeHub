import React, { useEffect, useState } from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { User } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
    const { user } = useKindeBrowserClient();

    // useEffect(() => {
    //     setUserData(user);
    // }, [user])

    return (
        <div className='flex justify-center'>
            <div className='flex w-[80%] my-8 justify-between bg-secondary items-center rounded-full pl-10 pr-5 py-2'>
                <div className='flex items-center gap-3'>
                    <img src="/mainlogo.png" alt="mainlogo" className='h-8' />
                    <p className='text-[2.2em] font-bebas tracking-wide'>PUBG TradeHub</p>
                </div>
                <div className='flex items-center relative gap-5 font-manrope tracking-wide'>
                    <p className=' cursor-pointer'>BUY</p>
                    <p className=' cursor-pointer'>SELL</p>
                    {!user ? (
                        <div>
                            <LoginLink className=' mr-5 bg-secondary-two p-2 rounded-lg font-bold hover:bg-primary-two'>Log in</LoginLink>
                        </div>
                    ) : (
                        <motion.div
                            className={`flex gap-4 overflow-hidden items-center bg-primary-two rounded-full pl-1`}>
                            <div className={`flex z-20 items-center gap-2`}>
                                {user.picture ? <img className='h-8 w-8 rounded-full' src={user.picture} alt="pic" /> : <User fill='white' size={20} />}
                                <p className='font-semibold'>{user.given_name}</p>
                            </div>
                            <motion.div
                                className='bg-secondary-two py-2 px-3 rounded-full font-bold hover:bg-primary hover:opacity-100 '
                            >
                                <LogoutLink>Log Out</LogoutLink>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Navbar