

const catsAndShelves = (start, finish, difference=finish-start) => {
Math.floor(difference/3)+difference%3
}
console.log(catsAndShelves(1,5))