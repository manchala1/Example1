var favoriteMovies=[]
function addFavoriteMovie(movieName){
    favoriteMovies.push(movieName)
}
function printFavoriteMovies(){
    for(var movie of favoriteMovies){
        console.log(movie)
    }
}
addFavoriteMovie("honda")
addFavoriteMovie("pilser")
addFavoriteMovie("sccoty")
printFavoriteMovies()