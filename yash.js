//function to find pokemon detail by name

var findPokemonByName = function(pokemonName, pokemonObject) {

    //flag to check if result is found or not
    var flag = 0;
    var arrayIndex;
    //to loop through the pokemon array
    for (arrayIndex in pokemonObject.pokemon) {
    //convert name to lower and parameter to lower by .toLowerCase function
    if (pokemonObject.pokemon[arrayIndex].name.toLowerCase() == pokemonName.toLowerCase()) {
    flag = 1; //set the flag value
    break; //break out of the loop whenever it matches the output
    } else {
    //do nothing
    }
    } //end loop through pokemon array
    
    if (flag == 1) {
    console.log("Pokemon found at location :" + (Number(arrayIndex) + 1))
    console.log(pokemonObject.pokemon[arrayIndex])
    } else
    console.log("Pokemon with Name "+ pokemonName + " not found")
    
    }
    
    //function to find pokemon name by evolution name
    findPokemonByNextEvolution = function(pokemonName, pokemonObject) {
    
    //flag to check if result is found or not
    var flag = 0;
    var arrayIndex;
    var resultArray = []
    //to loop through the pokemon array
    for (arrayIndex in pokemonObject.pokemon) {
    //loop through nextEvolution array
    for (nextEvolution in pokemonObject.pokemon[arrayIndex].next_evolution) {
    //convert name to lower and parameter to lower by .toLowerCase function
    if (pokemonObject.pokemon[arrayIndex].next_evolution[nextEvolution].name.toLowerCase() == pokemonName.toLowerCase()) {
    //push pokemon name to result array
    resultArray.push(pokemonObject.pokemon[arrayIndex].name)
    flag = 1 //set the flag value
    break; //break out of the loop whenever it matches the output
    } else {
    //do nothing
    }
    }//end loop through nextEvolution array
    
    }//end loop through pokemon array
    
    if (flag){
    console.log("Following is/are the pokemon's list who had " + pokemonName + " named in next Evolution")
    console.log(resultArray)
    }
    else
    console.log("Pokemon " + pokemonName + " is not found in anyone's next Evolution")
    
    }
    
    //function to find pokemon by weakness
   
        //  const x=(x,y)=>x+y;
        //  var z= x(11,12);
        //  console.log("in breket "+ z)

        //  function  q(x,y=100){
        //     return  x+y;
        //  }
        //  var z= q(2);
        //console.log("in breket "+ z);
  var number=[1,5,8,74,41,20,10,12]
         var frist=number.findIndex(w);
         function w(value,Index,array){
             return value>12;
         }
         console.log(frist)


         var season1= window.prompt("enter the season number ");
var episode= window.prompt("enter the episode number ");
var object_seson_find,q;
const findeseson = (season1 , object_seson_find) => season1==object_seson_find;
const findnumber = (episode,q) => episode==q;
        console.log(es6.embedded.episodes[episode-1].season);
        console.log(es6.embedded.episodes[episode-1].number);
        console.log(season1+"   s1   ");
        for (i=0;i<es6.embedded.episodes.length;i++)
        {
            object_seson_find=es6.embedded.episodes[i+1].season;
        q=es6.embedded.episodes[i+1].number;
        var r = findnumber (episode,q);
        var  z = findeseson (season1,y);
        if (z!=0 && r!=0){
            console.log(es6.embedded.episodes[i+1]);
            break;
            }
        }