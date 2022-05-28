let Car = {
    color: 'Black',
    Power(){return this.power = 25}
};
Car.color = 'Green';

console.log(Car.color);
console.log(Car.Power());