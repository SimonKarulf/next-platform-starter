import Link from 'next/link';

const navItems = [
    { linkText: 'Forside', href: '/' },
    { linkText: 'Opskrifter', href: '/opskrifter' },
];

export function Header() {
    return (
        <nav className="w-full bg-white pt-6 pb-6 text-black">
            <div className="flex items-center justify-between max-w-[72rem] mx-auto px-6 sm:px-12">
                <Link href="/" className="font-bold text-4xl no-underline">
                    Restaurant Karulf
                </Link>
                <ul className="flex gap-x-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="text-lg no-underline text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}