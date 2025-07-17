import Link from "next/link";

export default function Navigation() {
    return (
        <header className="flex justify-between font-roboto h-14 items-center">
            <div className="mx-10">Jenish Logo</div>

            <nav>
                <ul className="flex gap-4 mx-10">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/clientcomp">Client Comp</Link>
                    </li>
                    <li>
                        <Link href="/servercomp">Server Comp</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}