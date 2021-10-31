var favoriteMovies=[]
var userInput=prompt('What is your favorite name?')
addFavoriteMovie(userInput)
function addFavoriteMovie(movieName){
    favoriteMovies.push(movieName)
}

function printFavoriteMovies(){
    for(var movie of favoriteMovies){
        console.log(movie)
    }
}
do{
    var userInput=prompt('What is your favorite name?')
    addFavoriteMovie(userInput)
}while(userInput)
while(userInput){
    userInput=prompt('What is your favorite name?')
    addFavoriteMovie(userInput)
}
if(!userInput){
    printFavoriteMovies()
}
// addFavoriteMovie('rangam')
// addFavoriteMovie('chalo')
// addFavoriteMovie('rocky')