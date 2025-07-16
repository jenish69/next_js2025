import Link from "next/link";

export default function Navigation() {
    return (
        <header className="flex justify-between font-roboto">
            <div>Jenish Logo</div>

            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
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