function prime(x){
if (x>1){
    for(let i=2;i<=x;i++){
        if (x%i == 0 && x!=i){
            return console.log('not prime');
            break
        };
        if (x%i==0 && i==x) {
          return console.log('is prime');
        };
    };
} else return console.log('not prime');
};
prime(-25);
prime(0);
prime(1);
prime(4);
prime(35);
prime(101);
prime(7);
prime(41);
prime(49);