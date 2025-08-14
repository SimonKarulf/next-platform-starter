import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getRecipes() {
    const entries = await client.getEntries({ content_type: 'recipe' });
    return entries.items;
}

export async function getRecipeBySlug(slug) {
    const entries = await client.getEntries({
        content_type: 'recipe',
        'fields.slug': slug,
        limit: 1,
    });
    return entries.items[0];
}