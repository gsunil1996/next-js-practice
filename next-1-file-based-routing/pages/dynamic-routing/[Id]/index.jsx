import { useRouter } from 'next/router';
import React from 'react'

const IdDetails = () => {
    const router = useRouter();
    console.log("router", router.query);
    return (
        <div>IdDetails</div>
    )
}

export default IdDetails