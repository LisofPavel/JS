function terminal(name){
    if (name ==="Pavel" || name ==="pavel") {
        return console.log(`hello ${name}`);
    } else {
        return console.log('name has not found');
    }
};
terminal('pavel');
terminal('Pavel');
terminal('Paul');