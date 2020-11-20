$(document).ready(function(){
    
    //we need a function that will display each maze

    maze = [
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
        
    ]; //this is the maze it will be an array
    function displayMaze(){
        var output= '';

        //then we create a for loop to start displaying each element inside the rows

        for(var i=0; i < maze.length; i++){
            output += "\n <div class='row'> \n";

            // then we need another loop

            for(var j=0; j< maze[i].length; j++){

                //we need some mf conditionals !!!

                if(maze[i][j] == 2){
                    output+= `<div class='brick'></div>`
                }
                else if(maze[i][j]==1){
                    output+= "<div class='coin'></div>"
                };
                if(maze[i][j]==0){
                    output+= "<div class='empty'></div>"
                };

            };
            output += "\n </div>"
            //dont forget the closing tag!
            
        };
        console.log(output); //This part works!
    $('#maze-world').html(output);
    };

    displayMaze();
    
});