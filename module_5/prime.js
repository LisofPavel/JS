for(let x=2;x<100;x++){
    for(let y=2;y<=x;y++){
        if (x%y==0 && x!=y) break;
        if (x%y==0 && x==y){
            console.log(x);
        };
    };
};