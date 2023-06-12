import React from 'react'
import Link from 'next/link'

const Clients = () => {
    const clients = [
        { id: "max", name: "Maximillian" },
        { id: "sunil", name: "Sunil" }
    ]
    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clients.map(client => <li key={client.id} >
                    <Link href={`/clients/${client.id}`} >
                        {client.name}
                    </Link>
                </li>)}

                <p style={{ marginTop: "10px", marginBottom: "10px" }} > above code can also be written like this in next.js </p>

                {clients.map(client => <li key={client.id} >
                    <Link href={{
                        pathname: "/clients/[clientId]",
                        query: { clientId: client.id }
                    }} >
                        {client.name}
                    </Link>
                </li>)}

            </ul>
        </div>
    )
}

export default Clients