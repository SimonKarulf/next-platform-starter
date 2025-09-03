import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-12">
            <section className="w-full max-w-2xl text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-900 mb-2">
                    Velkommen til Restaurant Karulf
                </h1>
                <h2 className="text-xl text-gray-700 mb-8">
                    Opskrifter testet i Karulfs madklub
                </h2>
            </section>
            <section className="w-full max-w-3xl bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between px-8 py-10 mb-8">
                <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#1a237e] mb-4">
                        Oplev Karulfs Madklub
                    </h3>
                    <p className="text-base text-gray-700 mb-6">
                        Den 11. april 2023 kaldte Pia og Jesper Karulf til den første madklub i familien. Det blev hurtigt til en tradition, med hele kernefamilien hvor forretter, hovedretter og desserter blev serveret, med fantastiske vin som komplimenterede retterne. Her kan du finde en oversigt over de smukke måltider, selvfølgelig med tilhørende opskrifter!
                    </p>
                    <Link href="/opskrifter" passHref>
                        <button className="bg-yellow-100 hover:bg-yellow-200 text-[#1a237e] font-semibold px-6 py-3 rounded-lg border border-yellow-200 transition">
                            Sulten til madklub
                        </button>
                    </Link>
                </div>
                <div className="hidden md:flex items-center justify-center ml-10">
                    <div className="bg-yellow-100 rounded-full w-40 h-40 flex items-center justify-center">
                        <span className="text-5xl" role="img" aria-label="madklub">🍽️</span>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-2xl text-center mt-8">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Hvad kan du finde her?</h4>
                <p className="text-base text-gray-600 mb-2">
                    Udforsk opskrifter, inspiration og historier fra Karulfs madklub. Vi deler vores bedste retter, tips og hyggelige stunder – alt sammen for at gøre din madoplevelse endnu bedre.
                </p>
            </section>
        </div>
    );
}