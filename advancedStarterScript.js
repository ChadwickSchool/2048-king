
//2D array initialized with sample values. To get a blank board initialize all the values to zero
//var board = [[2,4,8,16],[32,64,128,512],[1024,0,0,0],[0,0,0,0]];
var board = [];
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var R = '82';
var totalTileNumber;
var score = 0;
var emptyspaces = true;


//As soon as webpage loads run these two functions
$(document).ready(function(){
	setUpBoard();
	printBoard();
	console.log("Loaded webpage"); //how you do print statements in javascript
});

function setUpBoard(){

	//initialize board to have no values
	for(var i=0; i<4; i++){
		var innergrid = [];
		for(var j=0; j<4; j++){
			innergrid.push(0);
		}
		board.push(innergrid);
	}
	//this adds a random tile
	checkBoard();
	addTile();

}
function checkBoard(){
	emptyspaces = false;
	for(var r=0; r < board.length; r++)
	{
		for(var c=0; c<=3; c++)
		{
			if(board[r][c] == 0){
				emptyspaces = true;
				break;
			}
		}
	}
}

function addTile() {
	//place a 2 on a random spot in the board
	if(emptyspaces == true){
		console.log("Calling add tile");
		var x = Math.round(Math.random()*3);
		var y = Math.round(Math.random()*3);

		while(board[x][y] !== 0){
		 x = Math.round(Math.random()*3);
		 y = Math.round(Math.random()*3);
	 }
		board[x][y] = 2;
	}
}

function printBoard(){
	document.getElementById("score").innerHTML = score;

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			//if the tile is not zero, put it on the board
			if(board[i][j]!=0){
				document.getElementById(boardID).innerHTML = board[i][j];
			}
			else {
				document.getElementById(boardID).innerHTML = "";
			}
			//Change the different number tiles to different colors
			switch(board[i][j]){
				case 2:
					document.getElementById(boardID).style.background = "#f0e5da";
					break;//similar to an else if. Makes sure none of the other cases executes if this one does
				case 4:
					document.getElementById(boardID).style.background = "#ede2c8";
					break;
				case 8:
					document.getElementById(boardID).style.background = "#feb578";
					break;
				case 16:
					document.getElementById(boardID).style.background = "#ff9962";
					break;
				case 32:
					document.getElementById(boardID).style.background = "#ff8060";
					break;
				case 64:
					document.getElementById(boardID).style.background = "#ff613c";
					break;
				case 128:
					document.getElementById(boardID).style.background = "#efd26d";
					break;
				case 256:
					document.getElementById(boardID).style.background = "#efd15c";
					break;
				case 512:
					document.getElementById(boardID).style.background = "#efcd4a";
					break;
				case 1024:
					document.getElementById(boardID).style.background = "#f0ca36";
					break;
				case 2048:
					document.getElementById(boardID).style.background = "#ccc0b3";
					break;
				default:
					//similar to the else statement. If none of the other cases execute, this statement will execute
					document.getElementById(boardID).style.background = "rgba(238, 228, 218, 0.35)";
					break;
			}
		}
	}
}
//show students an ascii conversion tool.
document.onkeydown = function(e) {

    //makes it work in internet explorer which uses window.event and not e
    e = e || window.event;

    //keyCode is actually a character value which we convert to a String
    //to use triple equals sign
    if (e.keyCode == UP_ARROW) {
        // up arrow
				combineTilesUp();
        moveTilesUp();
				checkBoard();
				addTile();

    }
    //double equals sign will convert it for us
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
				combineTilesDown();
				moveTilesDown();
				checkBoard();
				addTile();



				console.log("Pressed Down");
    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
			 combineTilesLeft();
			 moveTilesLeft();
			 checkBoard();
			 addTile();
       console.log("Pressed left");
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
			 combineTilesRight();
			 moveTilesRight();
			 checkBoard();
			 addTile();
       console.log("Pressed right");
    }

		else if (e.keyCode == R) {
			clearTile();
			addTile();
			console.log("Cleared Board")
			score = 0;

		}

    printBoard(); //have to recall print board to get the board to update
};
function clearTile(){
	for(var r=0; r < board.length; r++)
	{
		for(var c=0; c < board[r].length; c++)
		{
			board[r][c] = 0;
		}
	}
}

function moveTilesUp()
{
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r !== 0  && board[r][c] !== 0 && board[r-1][c] === 0)
            {
                board[r-1][c] = board[r][c];
                board[r][c] = 0;
            }
        }
    }
}
function combineTilesUp()
{
	for(var r=0; r < board.length; r++)
	{
		for(var c=0; c<board[r].length; c++)
		{
			if(r !== 0 && board[r][c] !== 0 && board[r-1][c] !== 0 && board[r][c] === board[r-1][c]){
				totalTileNumber = parseInt(board[r-1][c]) + parseInt(board[r][c]);
				countMyScore(board[r-1][c]);
				board[r-1][c] = board[r][c];
				board[r-1][c] = totalTileNumber;

				console.log(totalTileNumber);

				if(board[r-1][c] !==0){
					board[r][c] = 0;
				}
			}
		}
	}
}
function moveTilesDown()
{
	for(var r=board.length-1; r >=0; r--)
	{
		for(var c=0; c<board[r].length; c++)
		{
			if(r !== 3 && board[r][c] !== 0 && board[r+1][c] === 0)
			{
					board[r+1][c] = board[r][c];
					board[r][c] = 0;
				}

			}
		}
}
function combineTilesDown()
{
	for(var r=board.length-1; r >=0; r--)
	{
		for(var c=0; c<board[r].length; c++)
		{
			if(r !== 3 && board[r][c] !== 0 && board[r+1][c] !== 0 && board[r][c] === board[r+1][c]){
				totalTileNumber = parseInt(board[r+1][c]) + parseInt(board[r][c]);
				countMyScore(board[r+1][c]);
				board[r+1][c] = board[r][c];
				board[r+1][c] = totalTileNumber;

				console.log(totalTileNumber);

				if(board[r+1][c] !==0){
					board[r][c] = 0;
				}
			}
		}
	}
}


function moveTilesRight()
{
	for(var r=0; r < board.length; r++)
	{
		for(var c=3; c>=0; c--)
		{
			if(c !== 3  && board[r][c] !== 0 && board[r][c+1] === 0)
			{
				board[r][c+1] = board[r][c];
				board[r][c] = 0;
			}
		}
	}
}

function combineTilesRight()
{
	for(var r=0; r < board.length; r++)
	{
		for(var c=3; c>=0; c--)
		{
			if(c !== 3 && board[r][c] !== 0 && board[r][c+1] !== 0 && board[r][c] === board[r][c+1]){
				totalTileNumber = parseInt(board[r][c+1]) + parseInt(board[r][c]);
				countMyScore(board[r][c+1]);
				board[r][c+1] = board[r][c];
				board[r][c+1] = totalTileNumber;

				console.log(totalTileNumber);

				if(board[r][c+1] !==0){
					board[r][c] = 0;
				}
			}
		}
	}
}



function moveTilesLeft()
{
	for(var r=0; r < board.length; r++)
	{
		for(var c=0; c<=3; c++)
		{
			if(c !== 0  && board[r][c] !== 0 && board[r][c-1] === 0)
			{
				board[r][c-1] = board[r][c];
				board[r][c] = 0;
			}
		}
	}
}
function combineTilesLeft()
{
	for(var r=0; r < board.length; r++)
	{
		for(var c=0; c<=3; c++)
		{
			if(c !== 0 && board[r][c] !== 0 && board[r][c-1] !== 0 && board[r][c] === board[r][c-1]){
				totalTileNumber = parseInt(board[r][c-1]) + parseInt(board[r][c]);
				countMyScore(board[r][c-1]);
				board[r][c-1] = board[r][c];
				board[r][c-1] = totalTileNumber;

				console.log(totalTileNumber);

				if(board[r][c-1] !==0){
					board[r][c] = 0;
				}
			}
		}
	}
}

function countMyScore(countScore)
{
	score+=countScore;
}
