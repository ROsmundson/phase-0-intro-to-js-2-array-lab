const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push('Ralph')
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const newCatsArray = [...cats, `${name}`]
    return newCatsArray
}

function prependCat(name){
    const newCatsArray = [`${name}`, ...cats]
    return newCatsArray
}

function removeLastCat(){
    const newCatsArray = [...cats]
    newCatsArray.pop()
    return newCatsArray
}

function removeFirstCat(){
    const newCatsArray = [...cats]
    newCatsArray.shift()
    return newCatsArray
}