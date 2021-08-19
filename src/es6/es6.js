// let myInteger = 123
// let myString = "QWE"
// let someObject = {
//     anObjectProperty: {
//         anotherObjectProp: {q: 111, w: 222},
//         anotherArrayProp: [321, 432, 543]
//     },
//     aNumberArrayProp: [1, 2, 3],
//     anObjectArrayProp: [
//         {a: 123, b: 234}, {a: 321, b: 432}
//     ]
// }
//
// console.log(someObject.anObjectProperty.anotherObjectProp.q)
// console.log(someObject["anObjectProperty"].anotherObjectProp.q)
//
// let anotherObject = {}
// anotherObject["newProp"] = 123
// console.log(anotherObject.newProp)
//
// function addEs5(a, b) {
//     console.log(a, b)
//     return a + b
// }
//
// let ewq = addEs5(2, 3)
// console.log(ewq)
//
// const addEs6 = (a, b) => {
//     console.log(a, b)
//     return a + b
// }
//
// ewq1 = addEs6(2, 10)
// console.log(ewq1)
//
// const addEs62 = (a, b) => a + b
//
// ewq3 = addEs62(3, 4)
// console.log(ewq3)
//
// // const square = (b) => b * b
// const square = b => b * b
// squared = square(9)
// console.log(squared)
//
// // const f = (x, y = 7, z = 42)  => {
// //     return x + y + z
// // }
// const f = (x, y = 7, z = 42) => x + y + z
// let sum = f(1)
// console.log(sum)
// let sums = f(2, 3)
// console.log(sums)
//
// let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let div4 = all.filter(i => i % 4 === 0)
// let div3 = all.filter(i => i % 3 === 1)

// alt, longer way:
// let odd = all.filter((i) => {
//     return i % 2 !== 0
// })
// console.log(all, div4, div3, odd)
//
// let ev = [1, 2, 3, 4]
// let squared2 = ev.map(i => i * i)
// console.log(ev, squared2)
//
// let array = [1, 2, 4, 2, 5]
// let x = array.find(x => x > 3)
// let y = array.findIndex(x => x > 3)
// let z = array.filter(x => x > 3)
// console.log("x, y, and z", x, y, z)
//
// var customer = {name: "Alice"}
// var card = {amount: 7, product: "Bar", unitprice: 42}
// var message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`
// console.log(message)

// ES5
// var list = [1,2,3];
// var a = list[0], b = list[2]
// var tmp = a; a = b; b = tmp

// ES6
// var list = [1,2,3]
// var [a,,b] = list
// console.log(a,b)
// [b,a] = [a,b]

// ES5
// var tmp = {a: "123", b: "234", c: "345", d: "456"}
// var a  = tmp.a;
// var c = tmp.c;
// console.log(a)
// console.log(c)
// ES6
// var { a, c } = tmp
// console.log(a)
// console.log(c)

// var a = {"b": 1, "c": 2};
// // var x = a.c;
// a["d"] = 2
// var x = a.d;
// console.log(x)

// let tr = [35,98,12,29];
// let te = [91,34,109,83,22];
// let td = [...tr, 9, 10, 11, te]
// console.log(td.length)
//
// let iu = {
//     dl: 'jn',
//     fi: 'eu'
// }
// let lt = {
//     fi: 'ie',
//     nt: 'wi',
//     ...iu,
// }
// iu = {
//     ...lt,
//     fi: 'xe',
//     nt: 'oi'
// }
// console.log(iu.dl)
// console.log(lt.fi)
// console.log(iu.nt)








