import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className=' bg-primary h-screen flex justify-center items-center'>
            <SignUp appearance={{
                variables: {
                    colorBackground: "#EAF2EF",
                    colorPrimary: '#1a2c38'
                }
            }} />
        </div>
    )
}