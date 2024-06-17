import React from 'react'

const whyData = [
    {
        heading: 'Safe and Secure Transactions',
        content: 'We prioritize your security. Our platform uses advanced encryption and secure payment gateways to ensure every transaction is safe.'
    },
    {
        heading: 'Verified Accounts',
        content: 'Each account listed on our platform is thoroughly verified to guarantee authenticity and fair play. Buy with confidence and sell with ease.'
    },
    {
        heading: 'User-Friendly Interface',
        content: 'Our intuitive and easy-to-navigate website makes buying and selling PUBG accounts a breeze, even for first-time users.'
    },
    {
        heading: 'Competitive Pricing',
        content: 'Find the best deals on PUBG accounts with competitive pricing and transparent listing details.'
    },
]

function WhyUs() {
    return (
        <div className='mx-[13%] my-[5%] font-manrope'>
            <p className='text-4xl pb-2 text-center'>Why Choose Us ?</p>
            {/* <p className='text-center text-xl opacity-70'>Are you a passionate PUBG player looking to buy a high-level account or eager to sell your own? PUBG TradeHub is your one-stop destination for seamless transactions, secure trading, and an unmatched gaming community experience.</p> */}
            <div className=' grid grid-cols-2 gap-10 my-[1.5em]'>
                {whyData.map((obj) => (
                    <div className='p-3 rounded-lg bg-secondary'>
                        <p className=' text-2xl font-bebas tracking-wide'>{obj.heading}</p>
                        <p>{obj.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUs