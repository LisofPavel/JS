let arr = [1,6,7,8,3,4,5,6];
let filter = [];
let y = 0;
for(let i=0;i<arr.length;i++){
    if (arr[i]>3) {
        filter[y] = arr[i];
        y++;
    };
};
console.log(filter);