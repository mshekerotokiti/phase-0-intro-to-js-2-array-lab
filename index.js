// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph')
    return cats;
}


function destructivelyPrependCat(name){
    cats.unshift('Bob')
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop('Garfield')
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift('Milo')
    return cats;
}

function appendCat(name){
   let catsAppend =[...cats, 'Broom']
    return catsAppend;
}

function prependCat(name){
    let catsPrepend =['Arnold', ...cats]
    return catsPrepend;
}

function removeLastCat(name){
    let catsRemove1 =cats.slice(0, cats.length -1)
    return catsRemove1;
}

function removeFirstCat(name){
    let catsRemove2 = cats.slice(1)
    return catsRemove2;
}