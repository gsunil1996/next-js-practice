import { useRouter } from 'next/router';
import React from 'react'

const ClientID = () => {
    const router = useRouter();
    console.log("router", router.query);
    return (
        <div>ClientID</div>
    )
}

export default ClientID