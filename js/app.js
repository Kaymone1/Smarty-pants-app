//ensure nothing happens until window loads, event listener will start when html is ready
window.onload = (e) => {
    //create the "click"
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault() //stops auto refresh when calling for info loading
       
      //create variable to hold the text that goes into search bar
      const userInput = document.querySelector('input[type="text"]').value
  //console log for proof to make sure computer is taking user input
      console.log(userInput)

  // Fetch the data from  dictionary API by using the user input
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`).then((data) => {
        console.log(data.json)
        return data.json() //i parsed data from api into json for me to access info to manipulate
        //into my program
      }, (err) => {
        console.log(err, ' ERROR') // this will let me know why something isnt working
        //or if i'm trying to pull nonexistent info
      }).then((info) => {
        //make sure I am fetching the necessary data
        console.log(info)
        //grab the info i need from api given arrays of data and place them inside of the elements i created for them
        document.querySelector('#word').innerHTML = info[0].word;
        document.querySelector('#phonetics').innerHTML = info[0].phonetic;
        document.querySelector('#meanings').innerHTML = info[0].meanings[0].definitions[0].definition
      })
    })
  };



  