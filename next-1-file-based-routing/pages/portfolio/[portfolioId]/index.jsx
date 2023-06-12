import React from 'react';
import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
    const router = useRouter();

    console.log("router", router.query, router.pathname)

    return (
        <div>PortfolioProjectPage</div>
    )
}

export default PortfolioProjectPage