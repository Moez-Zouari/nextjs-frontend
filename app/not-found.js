import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Could Not find requested ressource</p>
            <Link href="/">Redirect to Home</Link>
        </div>
    )
}

export default NotFound
