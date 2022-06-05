try{
    console.log(a);
    let a = 3;
}
catch(err){
    console.log('let перед использованием нужно объявить');
};
try{
    let x = 1/0;
    if(x == Infinity){ throw new Error('на ноль делить нельзя');}
    console.log(x);
}
catch(e){
    console.log(e.message);
};