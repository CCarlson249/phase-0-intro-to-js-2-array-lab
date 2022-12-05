// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
    let newCats = cats.concat("Broom")
return newCats
}
function prependCat(){
let newCats2 = ["Arnold", ...cats]
return newCats2
}
function removeLastCat(){
let newCats3 = cats.slice(0, -1)
return newCats3
}
function removeFirstCat(){
let newCats4 = cats.slice(1, cats.length)
return newCats4
}