let products=["laptop","phone","headphones"]
console.log(products)
console.log(products[0])
console.log(products[0,2])
//.push()-it pushes/adds an element to the end of the array
products.push("tablet")
console.log(products)
//.unshift()-it adds an element to the beginning of an array
products.unshift("watch")
console.log(products)
//.pop()-removes last item
products.pop()
console.log(products)
//.shift()-removes first item
products.shift()
console.log(products)
console.log(products.length)