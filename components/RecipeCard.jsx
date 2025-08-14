import Link from 'next/link';

export default function RecipeCard({ recipe }) {
    const { title, slug, category, time, image } = recipe.fields;
    const imageUrl = image?.fields?.file?.url;

    return (
        <Link href={`/opskrifter/${slug}`} className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden no-underline">
            <div className="h-48 flex items-center justify-center bg-gray-100">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
                ) : (
                    <span className="text-5xl text-gray-300">🍽️</span>
                )}
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>{category}</span>
                    <span>{time}</span>
                </div>
            </div>
        </Link>
    );
}