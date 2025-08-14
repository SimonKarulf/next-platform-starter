import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-black bg-gray-50">
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <div className="flex flex-col w-full max-w-[72rem] mx-auto grow px-6 sm:px-12">
                        <main className="grow">{children}</main>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
