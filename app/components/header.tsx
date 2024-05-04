import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-sky-700 w-full text-white h-14 fixed top-0">
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
                    <Link href="/">Home</Link>
                    <Link href="/tech">Technology</Link>
                </div>
            </div>
        </header>
    );
}
