import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-sky-500 w-full text-white h-14">
            <div className="flex items-center justify-between max-w-5xl m-auto text-2xl h-full">
                <Link href="/">Home</Link>
                <Link href="/tech">Technology</Link>
            </div>
        </header>
    );
}
