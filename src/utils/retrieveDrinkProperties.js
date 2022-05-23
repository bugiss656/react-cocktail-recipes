

export const retrieveDrinkProperties = (drink, keyPattern) => {
    let results = []

    for (let item in drink) {
        if (item.includes(keyPattern) && drink[item] !== null) {
            results.push(drink[item])
        }
    }

    return results
}