'use client'

import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <div>Not Found Page!!!</div>
            <Link href={"/"}>Return to home page</Link>
            
        </div>
    )
}

export default NotFound