import React from 'react';
import { useRouter } from 'next/router';

const ClientProjectPage = () => {
    const router = useRouter();
    console.log("router", router.query);

    const loadProjectFunctionHandler = () => {

        // router.push("/clients/max/projectA");

        // above code can also be used as

        router.push({
            pathname: "/clients/[clientId]/[clientProjectId]",
            query: { clientId: 'max', clientProjectId: "projectA" }
        })
    }

    return (
        <div>
            <h1>ClientProjectPage</h1>
            <button onClick={loadProjectFunctionHandler} >Load project A</button>
        </div>
    )
}

export default ClientProjectPage