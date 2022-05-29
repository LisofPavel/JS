function prime(x){
if (x>1){
    for(let i=2;i<x;i++){
        if (x%i == 0){
            return console.log('not prime');
            
        } else return console.log('is prime');
    }
} else return console.log('not prime');
};
prime(-25);
prime(0);
prime(1);
prime(4);
prime(7);
prime(101);
