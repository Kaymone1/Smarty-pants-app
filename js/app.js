window.onload = (e) => {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
  
      const userInput = document.querySelector('input[type="text"]').value
  
      console.log(userInput)
  
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/<word>=${userInput}`).then((data) => {
        return data.json()
      }, (err) => {
        console.log(err, ' ERROR')
      }).then((info) => {
        document.querySelector('#word').innerHTML = info.Word
        document.querySelector('#phonetics').innerHTML = info.Phonetics
        document.querySelector('#meanings').innerHTML = info.Meanings
      })
    })
  };



  