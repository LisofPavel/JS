let animal = {
    move:"fast",
};
let cat = {
    __proto__:animal,
};
console.log(cat.move)