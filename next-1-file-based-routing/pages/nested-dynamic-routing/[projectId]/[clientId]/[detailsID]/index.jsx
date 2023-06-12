import { useRouter } from 'next/router';
import React from 'react'

const DetailsID = () => {
    const router = useRouter();
    console.log("router", router.query);
    return (
        <div>DetailsID</div>
    )
}

export default DetailsID