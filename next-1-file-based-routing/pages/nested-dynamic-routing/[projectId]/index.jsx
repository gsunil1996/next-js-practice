import { useRouter } from 'next/router';
import React from 'react'

const ProjectId = () => {
    const router = useRouter();
    console.log("router", router.query);
    return (
        <div>ProjectId</div>
    )
}

export default ProjectId