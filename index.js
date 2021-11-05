const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
    return cats
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

const appendCat = () => [...cats, "Broom"];

const prependCat = () => ["Arnold", ...cats];

function removeLastCat() {
return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}








    

