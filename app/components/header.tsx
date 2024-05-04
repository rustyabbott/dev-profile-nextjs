import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-sky-700 w-full text-white h-14 fixed top-0">
            <div className="max-w-5xl m-auto text-2xl h-full">
                <div className="sm:hidden   flex items-center justify-between h-full">
                    <Link href="/">
                        <Image src="/img/home-icon.svg" alt="Home" width={30} height={30} className="mx-3" />
                    </Link>
                    <Link href="/tech">
                        <div className="h-8 w-8 mx-3">
                            <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff" d="M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className="hidden sm:flex sm:items-center sm:justify-between sm:h-full sm:px-4">
                    <Link href="/">Home</Link>
                    <Link href="/tech">Technology</Link>
                </div>
            </div>
        </header>
    );
}
