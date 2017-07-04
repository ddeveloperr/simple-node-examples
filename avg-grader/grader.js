function average(scores){
    // add all scores together 
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    // divide by total number
    var avg = total/scores.length
    
    // round average 
    return Math.round(avg);
}

var scores = [34,45,56,67,78,89,89,89,98,99,77,66];
console.log("**************The average score************");
console.log(average(scores));

var scores2 = [37,43,51,63,73,83,84,85,98,99,77,66];
console.log("**************The average score2 ************");
console.log(average(scores2));