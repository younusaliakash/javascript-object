///**Object Compare */
var obj1 = {
    x : 50,
    y : 60
}
var obj2 = {
    x : 50,
    y : 60
}
// console.log(obj1 == obj2)

if ( obj1.x == obj2.x && obj2.y == obj1.y){
    console.log(true)
}else{
    console.log(false)
}
console.log(JSON.stringify(obj1) == JSON.stringify(obj2))
