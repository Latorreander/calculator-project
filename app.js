const inputArea = document.querySelector('.display')
const divButtons = document.querySelector('.buttons')


divButtons.addEventListener('click', e => {

  

    if(e.target.value === '='){
      
        inputArea.value = eval(inputArea.value)
        result = eval(inputArea.value)
        inputArea.value = eval(result += e.target.value)
    }
  
    inputArea.value += e.target.value
    
    if (e.target.value === 'C'){
        inputArea.value = 0
        // window.location.reload()
    }  
})