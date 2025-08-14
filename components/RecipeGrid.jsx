'use client';
import { useState } from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeGrid({ recipes }) {
    const [selected, setSelected] = useState('Alle');
    const [search, setSearch] = useState('');
    const categories = ['Alle', ...Array.from(new Set(recipes.map(r => r.fields.category)))];

    const filtered = recipes.filter(r => {
        const matchesCategory = selected === 'Alle' || r.fields.category === selected;
        const matchesSearch = r.fields.title.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <input
                type="text"
                placeholder="Søg efter en opskrift..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full max-w-md mb-6 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-yellow-400"
            />
            <div className="flex gap-3 mb-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`px-5 py-2 rounded-full font-medium transition ${
                            selected === cat
                                ? 'bg-yellow-400 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                        }`}
                        onClick={() => setSelected(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filtered.map(recipe => (
                    <RecipeCard key={recipe.sys.id} recipe={recipe} />
                ))}
            </div>
        </>
    );
}