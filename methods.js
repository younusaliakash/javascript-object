///**Methods */
 var obj = {
     x : 40,
     y : 90,
     e : 120
 }

//  console.log(Object.keys(obj))
//  console.log(Object.values(obj))
//  console.log(Object.entries(obj))

var obj2 = Object.assign({}, obj)
delete obj2.e
console.log(obj)
console.log(obj2)