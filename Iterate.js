///**Iterate of Objects */

var obj = {
    a : 30,
    b : 40,
    c : 45
}
console.log('c' in obj)
console.log('d' in obj)

for( var i in obj){
    console.log(i)
    console.log(obj[i])
}