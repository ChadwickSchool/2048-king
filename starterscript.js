var grid = [];
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var totalTileNumber;


//As soon as webpage loads run these two functions
$(document).ready(function(){
	setUpBoard();
	printBoard();
	console.log("Loaded webpage"); //how you do print statements in javascript
});

function setUpBoard(){

	// initialize board to have no values
	for(var i=0; i<4; i++){
		var innergrid = [];
		for(var j=0; j<4; j++){
			innergrid.push("x");
		}
		grid.push(innergrid);
	}
	//this adds arandom tile
	addTile();

}
//the reason we need 3 is because the math function spawns a random # between 0,1 and multipleies by 3 and rounds
function addTile() {
	//place a 2 on a random spot in the board
	var x = Math.round(Math.random()*3);
	var y = Math.round(Math.random()*3);

	while(grid[x][y] !=="x"){
	 x = Math.round(Math.random()*3);
	 y = Math.round(Math.random()*3);
 }
	grid[x][y] = "2";

}

function combineTiles()
{
	if (grid[x][y] = grid [r][c])
	{

	}

}


function printBoard(){
	var board = '<br/>' + "*--------------*" + '<br/>';
	for(var i=0; i<grid.length; i++){
		board += "|   ";
		for(var j=0; j<grid[i].length; j++){
			board += grid[i][j] + "   |   ";
		}
		board += '<br/>';
		board += "*--------------*";
		board += '<br/>';
	}

	//console.log(board);
	document.getElementById("container").innerHTML = board;
}


//function gets called anytime  a key is pressed
//e is a special variable
// that references the event obeject that reads if the user is interacting with
//the window
document.onkeydown = function(e) {

    //makes it work in internet explorer which uses window.event and not e
    e = e || window.event;

    //keyCode is actually a character value which we convert to a String
    //to use triple equals sign
    if (e.keyCode == UP_ARROW) {
        // up arrow
				combineTilesUp();
        moveTilesUp();
				addTile();

    }
    //double equals sign will convert it for us
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
				combineTilesDown();
				moveTilesDown();
				addTile();

				console.log("Pressed Down");
    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
			 combineTilesLeft();
			 moveTilesLeft();
			 addTile();
       console.log("Pressed left");
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
			 combineTilesRight();
			 moveTilesRight();
			 addTile();
       console.log("Pressed right");
    }

    printBoard(); //have to recall print board to get the board to update
};

//STORAGE OF MOVEMENT FUNCTIONS_________________________
function moveTilesUp()
{
    for(var r=0; r < grid.length; r++)
    {
        for(var c=0; c<grid[r].length; c++)
        {
            if(r !== 0  && grid[r][c] !== "x" && grid[r-1][c] === "x")
            {
                grid[r-1][c] = grid[r][c];
                grid[r][c] = "x";
            }
        }
    }
}
function combineTilesUp()
{
	for(var r=0; r < grid.length; r++)
	{
		for(var c=0; c<grid[r].length; c++)
		{
			if(r !== 0 && grid[r][c] !== "x" && grid[r-1][c] !== "x" && grid[r][c] === grid[r-1][c]){
				totalTileNumber = parseInt(grid[r-1][c]) + parseInt(grid[r][c]);
				grid[r-1][c] = grid[r][c];
				grid[r-1][c] = totalTileNumber;

				console.log(totalTileNumber);

				if(grid[r-1][c] !=="x"){
					grid[r][c] = "x";
				}
			}
		}
	}
}
function moveTilesDown()
{
	for(var r=grid.length-1; r >=0; r--)
	{
		for(var c=0; c<grid[r].length; c++)
		{
			if(r !== 3 && grid[r][c] !== "x" && grid[r+1][c] === "x")
			{
					grid[r+1][c] = grid[r][c];
					grid[r][c] = "x";
				}

			}
		}
}
function combineTilesDown()
{
	for(var r=grid.length-1; r >=0; r--)
	{
		for(var c=0; c<grid[r].length; c++)
		{
			if(r !== 3 && grid[r][c] !== "x" && grid[r+1][c] !== "x" && grid[r][c] === grid[r+1][c]){
				totalTileNumber = parseInt(grid[r+1][c]) + parseInt(grid[r][c]);
				grid[r+1][c] = grid[r][c];
				grid[r+1][c] = totalTileNumber;

				console.log(totalTileNumber);

				if(grid[r+1][c] !=="x"){
					grid[r][c] = "x";
				}
			}
		}
	}
}


function moveTilesRight()
{
	for(var r=0; r < grid.length; r++)
	{
		for(var c=3; c>=0; c--)
		{
			if(c !== 3  && grid[r][c] !== "x" && grid[r][c+1] === "x")
			{
				grid[r][c+1] = grid[r][c];
				grid[r][c] = "x";
			}
		}
	}
}

function combineTilesRight()
{
	for(var r=0; r < grid.length; r++)
	{
		for(var c=3; c>=0; c--)
		{
			if(c !== 3 && grid[r][c] !== "x" && grid[r][c+1] !== "x" && grid[r][c] === grid[r][c+1]){
				totalTileNumber = parseInt(grid[r][c+1]) + parseInt(grid[r][c]);
				grid[r][c+1] = grid[r][c];
				grid[r][c+1] = totalTileNumber;

				console.log(totalTileNumber);

				if(grid[r][c+1] !=="x"){
					grid[r][c] = "x";
				}
			}
		}
	}
}



function moveTilesLeft()
{
	for(var r=0; r < grid.length; r++)
	{
		for(var c=0; c<=3; c++)
		{
			if(c !== 0  && grid[r][c] !== "x" && grid[r][c-1] === "x")
			{
				grid[r][c-1] = grid[r][c];
				grid[r][c] = "x";
			}
		}
	}
}
function combineTilesLeft()
{
	for(var r=0; r < grid.length; r++)
	{
		for(var c=0; c<=3; c++)
		{
			if(c !== 0 && grid[r][c] !== "x" && grid[r][c-1] !== "x" && grid[r][c] === grid[r][c-1]){
				totalTileNumber = parseInt(grid[r][c-1]) + parseInt(grid[r][c]);
				grid[r][c-1] = grid[r][c];
				grid[r][c-1] = totalTileNumber;

				console.log(totalTileNumber);

				if(grid[r][c-1] !=="x"){
					grid[r][c] = "x";
				}
			}
		}
	}
}
