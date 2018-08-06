 
 /// <summary>
 /// Determines the possible paths to reach the top of the stairs.
 /// </summary>  
 /// <param name="n" type="Number">
 /// The number of steps of a staircase.
 /// </param>  
 /// <returns type="Object">
 /// An array of the number of possible paths.
 /// </returns>      
const num_ways = (n) => {

    let value, step1;

    // paths array
    let paths = []; 

    // startPosition is a constant set to 0
    const startPosition = "0";    

    try {       

        while (validateInputs(n)) {

            // step2 is a constant set to n
            const step2 = n;

            for(step1 = 1; step1 < n + 1; step1++) {

                if (step1 < n) {
                    value = startPosition.concat(" - ", step1, " - ", step2);
            
                } else if (step1 === n) {
                    value = startPosition.concat(" - ", step2);             
                }
        
                // add possible path to the paths array
                paths.push(value);
            }; 
            console.log("* There are " + paths.length + " possible paths to get to the top of the stairs. *")   
            return paths;            
        }           
        throw new Error("\"n\" must be a number!"); 
    } catch (err) {
         // console.log(err);
    }    
};

 /// <summary>
 /// Validates input parameters.
 /// </summary>  
 /// <param name="n" type="Number">
 /// The number of steps of a staircase.
 /// </param>  
 /// <returns type="Boolean">
 /// Returns 'true' or 'false' to indicate if an input is valid or not.
 /// </returns>  
const validateInputs = (n) => {    
    if (typeof n !== "number") {
        return false;
    } 
    return true;
};

export default { 
    num_ways,
    validateInputs
 }
