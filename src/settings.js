
export const categories = [
    {
        name: 'Ordinary Drink',
        route: 'ordinary-drink',
        'ordinary-drink': 'ordinary_drink',
    },
    {
        name: 'Cocktail',
        route: 'cocktail',
        'cocktail': 'cocktail',
    },
    {
        name: 'Shake',
        route: 'shake',
        'shake': 'shake',
    },
    {
        name: 'Other / Unknown',
        route: 'other-unknown',
        'other-unknown': 'other/unknown',
    },
    {
        name: 'Cocoa',
        route: 'cocoa',
        'cocoa': 'cocoa',
    },
    {
        name: 'Shot',
        route: 'shot',
        'shot': 'shot',
    },
    {
        name: 'Coffee / Tea',
        route: 'coffee-tea',
        'coffee-tea': 'coffee / tea',
    },
    {
        name: 'Homemade Liqueur',
        route: 'homemade-liqueur',
        'homemade-liqueur': 'homemade_liqueur',
    },
    {
        name: 'Punch / Party Drink',
        route: 'punch-party-drink',
        'punch-party-drink': 'punch / party drink',
    },
    {
        name: 'Beer',
        route: 'beer',
        'beer': 'beer',
    },
    {
        name: 'Soft Drink',
        route: 'soft-drink',
        'soft-drink': 'soft_drink',
    },
]

export const urls = {
    drinksByCategory: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
    randomDrink: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    drinkById: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
    ingredientByName: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=',
    ingredientImage: 'https://www.thecocktaildb.com/images/ingredients/',
    drinksByName: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
}