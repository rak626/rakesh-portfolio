import React, {ReactNode} from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomeLayout = ({children}: { children: ReactNode }) => {
    return (
        <main>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    )
}
export default HomeLayout
