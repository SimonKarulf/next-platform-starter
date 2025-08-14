import { getRecipes } from '../../utils/utils';
import RecipeGrid from '../../components/RecipeGrid.jsx';

export default async function OpskrifterPage() {
    const recipes = await getRecipes();
    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-yellow-700 mb-2">Madbklubbens opskrifter!</h1>
                <p className="text-gray-500 mb-8">Se om du kan finde din yndlings opskrift fra klubben!</p>
                <RecipeGrid recipes={recipes} />
            </div>
        </div>
    );
}