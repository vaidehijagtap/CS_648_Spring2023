//1.

window.console.log("1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.");
window.console.log("\n");

var fav_movies=["The Little Mermaid","The Lion King","Fantasia","Dumbo","Bambi"];
window.console.log("Second movie in my array is: ")
window.console.log(fav_movies[1]);

//2.
window.console.log("\n");
window.console.log("\n");
window.console.log("2. Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.");
window.console.log("\n");

var movies = new Array(5);
movies[0]="The Little Mermaid";
movies[1]="The Lion King";
movies[2]="Fantasia";
movies[3]="Dumbo";
movies[4]="Bambi";
window.console.log("First movie in my array is: ")
window.console.log(movies[0]);

//3.
window.console.log("\n");
window.console.log("\n");
window.console.log("3. Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.");
window.console.log("\n");

movies.splice(2, 0, "Snow Dogs");
window.console.log(movies.length);

//4.
window.console.log("\n");
window.console.log("\n");
window.console.log("4. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.");
window.console.log("\n");

var movies = [];

movies[0]="The Little Mermaid";
movies[1]="The Lion King";
movies[2]="Fantasia";
movies[3]="Dumbo";
movies[4]="Bambi";

delete movies[0];
window.console.log(movies);

//5.

window.console.log("\n");
window.console.log("\n");
window.console.log("5. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.");
window.console.log("\n");

var movies = [];
movies[0]="The Little Mermaid";
movies[1]="The Lion King";
movies[2]="Fantasia";
movies[3]="Dumbo";
movies[4]="Bambi";
movies[5]="Snow Dogs";
movies[6]="Holes";
for (var movie in movies) {
  window.console.log(movies[movie]);
}

//6.

window.console.log("\n");
window.console.log("\n");
window.console.log("6. Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.");
window.console.log("\n");

for(var movie of movies) {
  window.console.log(movie);
}

//7.

window.console.log("\n");
window.console.log("\n");
window.console.log("7. Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.");
window.console.log("\n");

movies.sort();

for(var movie of movies) {
  window.console.log(movie);
}

//8.

window.console.log("\n");
window.console.log("\n");
window.console.log("8. Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window.");
window.console.log("\n");

var movies = [];
movies[0]="The Little Mermaid";
movies[1]="The Lion King";
movies[2]="Fantasia";
movies[3]="Dumbo";
movies[4]="Bambi";
movies[5]="Snow Dogs";
movies[6]="Holes";

var leastFavMovies = [];
leastFavMovies[0] = "Hidalgo";
leastFavMovies[1] = "The Last Shot";
leastFavMovies[2] = "The Village";

window.console.log("Movies I like:");
window.console.log("\n");
for(var movie of movies) {
  window.console.log(movie);
}

window.console.log("\n");
window.console.log("Movies I regret watching:");

window.console.log("\n");
for(var movie of leastFavMovies) {
  window.console.log(movie);
}

//9.

window.console.log("\n");
window.console.log("\n");
window.console.log("9. Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted");
window.console.log("\n");

var favMovies = [];
favMovies[0]="The Little Mermaid";
favMovies[1]="The Lion King";
favMovies[2]="Fantasia";
favMovies[3]="Dumbo";
favMovies[4]="Bambi";
favMovies[5]="Snow Dogs";
favMovies[6]="Holes";

var leastFavMovies = [];
leastFavMovies[0] = "Hidalgo";
leastFavMovies[1] = "The Last Shot";
leastFavMovies[2] = "The Village";

var movies = favMovies.concat(leastFavMovies);
movies.sort().reverse();
for(var movie of movies) {
  window.console.log(movie);
}

//10.

window.console.log("\n");
window.console.log("\n");
window.console.log("10. Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.");
window.console.log("\n");

var lastMovie = movies.slice(-1)[0];
window.console.log(lastMovie);

//11.

window.console.log("\n");
window.console.log("\n");
window.console.log("11. Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.");
window.console.log("\n");

window.console.log(movies.shift());

//12.

window.console.log("\n");
window.console.log("\n");
window.console.log("12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.");
window.console.log("\n");

var favMovies = [];
favMovies[0]="The Little Mermaid";
favMovies[1]="The Lion King";
favMovies[2]="Fantasia";
favMovies[3]="Dumbo";
favMovies[4]="Bambi";
favMovies[5]="Snow Dogs";
favMovies[6]="Holes";

var leastFavMovies = [];
leastFavMovies[0] = "Hidalgo";
leastFavMovies[1] = "The Last Shot";
leastFavMovies[2] = "The Village";

var mergedMovies = favMovies.concat(leastFavMovies);
mergedMovies.sort().reverse();

var leastFavMoviesindices = [];

mergedMovies.forEach((movie, ind) => {
  if (leastFavMovies.includes(movie)) {
    leastFavMoviesindices.push(ind); }
});

var goodmovies = ["Make Mine Music","Song of the South","Melody Time"]

leastFavMoviesindices.forEach((index) => {
    mergedMovies[index] = goodmovies.shift();
});

for (var index = 0; index < mergedMovies.length; index++) {
    window.console.log(mergedMovies[index] );
}
window.console.log("\n");


//13.

window.console.log("\n");
window.console.log("\n");
window.console.log("13. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.");
window.console.log("\n");

var movies = [["The Little Mermaid", 1], ["The Lion King", 2], ["Fantasia", 3], ["Dumbo", 4], ["Bambi", 5]];
var movieNames = movies.filter(function(movie) {
  return typeof movie[0] === "string";
});
window.console.log(movieNames.map(movie => movie[0]));


//14.

window.console.log("\n");
window.console.log("\n");
window.console.log("14. Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result");
window.console.log("\n");

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {

  window.console.log("Employees: ");
  window.console.log("\n"); 
  employees.forEach(function(emp) {
    window.console.log(emp);
  
});
};

showEmployee(employees);

//15. -------

window.console.log("\n");
window.console.log("\n");
window.console.log("15. Write a JavaScript function to filter false, null, 0 and blank values from an array.");
window.console.log("\n");

var values = [58, '', 'abcd', true, null, false, 0];

var valuesFilter = function(values){
    return values.filter(function(value) {
  return value !== false && value !== null && value !== 0  && value !== "";
});
};

window.console.log(valuesFilter([58, '', 'abcd', true, null, false, 0]));


//16.

window.console.log("\n");
window.console.log("\n");
window.console.log("16. Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.");
window.console.log("\n");

var randomNumber = function(value) {
  return value[Math.floor(Math.random() * value.length)];
};
var numsArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
window.console.log(randomNumber(numsArray));

//17.

window.console.log("\n");
window.console.log("\n");
window.console.log("17. Write a JavaScript function to get the largest number from a numeric array.");
window.console.log("\n");

var LargestNumber = function(value){
    return Math.max(...value);
}

var numsArray = [10, 20, 30, 40, 50];
window.console.log(LargestNumber(numsArray));
