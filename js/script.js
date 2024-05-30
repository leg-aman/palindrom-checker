loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let word = document.getElementById("word").value;
    let res = document.getElementById("result");
    const mes = isPalindrome(word)
   console.log(mes)
    if(mes){
        res.innerHTML= `${word} is palindrome!`
    } else {
        res.innerHTML = `${word} is not palindrome!`
    }
  });

  function isPalindrome(word){
    if (word != "" ) {
        // store the word inside two different arrays
        // array1 is stack
        //   array2 is queue
        const arr = []
        const arr2 = []
        for(let char in word){
            arr.push(word[char])
            arr2.push(word[char])
        }
        console.log(arr)
         
        while(arr.length > 0 ){
            if (arr.pop() !== arr2.shift()){
                return false
            }
        }
        return true
    }
  }
