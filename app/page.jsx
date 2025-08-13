import React from 'react';

export default function Page() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start"
            style={{ backgroundColor: '#0a174e' }}
        >
            <h1
                className="mt-16 mb-8 text-5xl font-bold"
                style={{ color: '#fff', letterSpacing: '2px' }}
            >
                Restaurant Karulf
            </h1>
            <p
                className="text-lg mb-4"
                style={{ color: '#fff', maxWidth: '600px', textAlign: 'center' }}
            >
                Welcome to Restaurant Karulf, where we serve delicious meals made from the freshest ingredients. Join us for an unforgettable dining experience!
            </p>
            <p
                className="text-lg mb-4"
                style={{ color: '#fff', maxWidth: '600px', textAlign: 'center' }}
            >
                I made this while trying to play a PEAK. What a game!! So much time for code!
            </p>
        </div>
    );
}