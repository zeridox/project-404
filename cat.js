var a = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1],
    [2,2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,2,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,1,1,1,1,2,1,2,1,1,1,2,1,2],
    [2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,2,1,2,1,1,1,1,1,1,1,2,1,1,1,2],
    [2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2],
    [2,1,2,1,2,1,1,1,1,1,1,1,2,1,1,1,2],
    [2,1,2,1,2,1,2,2,2,2,2,1,2,2,2,1,2],
    [2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2],
    [2,2,2,1,2,1,2,1,2,1,2,1,2,1,2,2,2],
    [2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    
];


var b = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1],
    [2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2],
    [2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,2],
    [2,1,2,2,2,1,2,2,2,1,2,1,2,1,2,1,2],
    [2,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,2],
    [2,1,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2],
    [2,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,2,2,2,2,2,2,2,2,1,2,1,2],
    [2,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2],
    [2,2,2,1,2,1,2,2,2,2,2,1,2,1,1,1,2],
    [2,1,1,1,1,1,2,1,1,1,2,1,2,1,2,1,2],
    [2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,1,2],
    [2,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2],
    [2,1,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    
];

function conCatX(x,y){
    var maze1 = x.length
    var maze2 = y[0].length;
    for(var i = 0; i<maze1; i++){
        for (var j=1;j<maze2; j++){
           x[i].push(y[i][j]); 
        }
        
};
    return x;

};

function conCatY(x,y){
    x.pop();
    x.push(y);
    return x;
};


doggy = conCatX(a,b);


