window.onload = (e) => {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
  
      const userInput = document.querySelector('input[type="text"]').value
  
      console.log(userInput)
  
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`).then((data) => {
        console.log(data.json)
        return data.json()
      }, (err) => {
        console.log(err, ' ERROR')
      }).then((info) => {
        console.log(info)
        document.querySelector('#word').innerHTML = info[0].word;
        document.querySelector('#phonetics').innerHTML = info[0].phonetic;
        document.querySelector('#meanings').innerHTML = info[0].meanings[0].definitions[0].definition
      })
    })
  };



  