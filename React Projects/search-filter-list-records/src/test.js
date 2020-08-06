// const obj = { Cuisine: ['Dutch', 'European', 'Vegetarian Friendly', 'Gluten Free Options'] }
// console.log(obj.Cuisine)
// console.log(obj.Cuisine[1])
// const json = '{ "Cuisine": ["Dutch", "European", "Vegetarian Friendly", "Gluten Free Options"] }'

// var txt = '{"name":"John", "age":30, "city":"New York"}'
// objData = JSON.parse(json)
// console.log(objData.Cuisine[1])

data = { "Cuisine": "['French', 'Dutch', 'European']" }
genStr = data.Cuisine.substring(1, data.Cuisine.length - 1)
newStr = genStr.split(',')
