"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const isTechPage = pathname === '/tech';
    const isHomePage = pathname === '/';

    return (
        <header className="bg-[#0b6cfd] w-full text-white h-14 fixed top-0">
            <div className="max-w-5xl m-auto text-2xl h-full">
                <nav className="sm:hidden flex items-center justify-between h-full">
                    <Link href="/">
                        <Image src="/img/home-icon.svg" alt="Home" width={30} height={30} className="mx-3" />
                    </Link>
                    <Link href="/tech">
                        <Image src="/img/code.svg" alt="Tech" width={40} height={40} className="mx-3" />
                    </Link>
                </nav>
                <div className="hidden sm:flex sm:items-center sm:justify-between sm:h-full sm:px-4">
                    <Link href="/" className={`hover:text-black ${isHomePage ? 'underline' : ''}`}>Home</Link>
                    <Link href="/tech" className={`hover:text-black ${isTechPage ? 'underline' : ''}`}>Technology</Link>
                </div>
            </div>
        </header>
    );
}
