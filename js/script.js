loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let word = document.getElementById("word").value;
  
    if (word != "" ) {
        // store the word inside two different arrays
        // array1 is stack
        //   array2 is queue
        const arr = []
        const arr2 = []
        for(let x in word){
            arr.push(word[x])
            arr2.push(word[x])
        }
        
    } 
  });