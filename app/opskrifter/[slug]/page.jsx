import { getRecipeBySlug } from "utils/utils";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const renderOptions = {
    renderNode: {
        [BLOCKS.UL_LIST]: (node, children) => (
            <ul className="list-disc list-inside ml-4 mt-0 mb-4">{children}</ul>
        ),
        [BLOCKS.OL_LIST]: (node, children) => (
            <ol className="list-decimal list-inside ml-4 mt-0 mb-4">{children}</ol>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => (
            <li className="mb-1">{children}</li>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="mb-1">{children}</p>
        ),
        [BLOCKS.HEADING_4]: (node, children) => (
            <div className="font-bold text-gray-900 mt-6 mb-1">{children}</div>
        ),
        [BLOCKS.HEADING_5]: (node, children) => (
            <div className="font-bold text-gray-900 mt-6 mb-1">{children}</div>
        ),
    },
};

export default async function RecipePage({ params }) {
    const { slug } = await params;
    const recipe = await getRecipeBySlug(slug);

    if (!recipe) {
        return <div className="py-12 text-center">Opskrift ikke fundet.</div>;
    }

    const { title, time, servings, category, ingredients, instructions } = recipe.fields;

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">{title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <InfoCard icon="⏰" label="Tid" value={time} />
                    <InfoCard icon="🍽️" label="Portioner" value={servings} />
                    <InfoCard icon="🥘" label="Type" value={category} />
                </div>
                <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Ingredienser</h2>
                <div className="bg-blue-50 rounded-lg p-6 mb-10 text-gray-800">
                    {ingredients && documentToReactComponents(ingredients, renderOptions)}
                </div>
                <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Fremgangsmåde</h2>
                <div className="mb-10">
                    {Array.isArray(instructions) && (
                        <ol className="flex flex-col gap-4">
                            {instructions.map((step, i) => (
                                <li key={i} className="flex items-center bg-blue-50 rounded-lg px-6 py-4">
                                    <span className="flex items-center justify-center bg-blue-400 text-white font-bold rounded-full w-8 h-8 mr-4">
                                        {i + 1}
                                    </span>
                                    <span className="text-gray-800">{step}</span>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        </div>
    );
}

function InfoCard({ icon, label, value }) {
    return (
        <div className="flex flex-col items-center bg-blue-50 rounded-lg px-8 py-6 min-h-[120px]">
            <span className="text-3xl mb-2">{icon}</span>
            <span className="text-sm text-gray-500">{label}</span>
            <span className="text-lg font-semibold text-gray-800 mt-1">{value}</span>
        </div>
    );
}