import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <ul>
          <li>
            <Link href="/portfolio" target="_blank">Portfolio</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
