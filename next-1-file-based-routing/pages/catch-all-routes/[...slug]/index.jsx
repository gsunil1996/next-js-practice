import { useRouter } from 'next/router';
import React from 'react';

const SlugDetails = () => {

    const router = useRouter();
    console.log("router", router.query);

    return (
        <div>SlugDetails</div>
    )
}

export default SlugDetails