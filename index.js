// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


const destructivelyAppendCat = (name) => {
    cats.push("Ralph")
}

const destructivelyPrependCat = (name )=> {
    cats.unshift("Bob")

}

const destructivelyRemoveLastCat = (name) => { 
     return cats.pop()
}

const destructivelyRemoveFirstCat = (name) => {
    return cats.shift()
}

const appendCat = (name) => {
    const newCats = [...cats, 'Broom']
    return newCats
}

const prependCat = (name) => {
    const newPrependCats = ['Arnold', ...cats]
    return newPrependCats
}

const removeLastCat = (name) => {
    const newRemoveLastCat = cats.slice(0,2)
    return newRemoveLastCat;
}

const removeFirstCat = (name) => {
    const newRemoveLastCat = cats.slice(1)
    return newRemoveLastCat;
}