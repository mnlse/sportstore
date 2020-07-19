const data = [];
const categories = ["Test1", "Kajaki", "Kategoria3", "Piłka nożna", "Szachy", "Sporty wodne"]

for (let i = 0; i < 100; i++) {
    data.push({
        name: `Kajak ${i}`,
        category: categories[Math.floor((Math.random() * categories.length))]
    })
}

module.exports = function () {
    return {
        products: data,
        categories: categories,
        orders: []
    }
}