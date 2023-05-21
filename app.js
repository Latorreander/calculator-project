const inputArea = document.querySelector('.display')
const divButtons = document.querySelector('.buttons')
const powerButton = document.querySelector('.power')
const sound = document.getElementById('sound')
const soundButton = document.querySelector('.btn-sound')


divButtons.addEventListener('click', e => {


    if(e.target.value === '='){
      
        inputArea.value = eval(inputArea.value)
        result = eval(inputArea.value)
        inputArea.value = eval(result += e.target.value)
    }
  
    inputArea.value += e.target.value
   
    
    if (e.target.value === 'C'){
       location.reload()
       
    }

    if (e.target.classList.contains('power')){
       inputArea.classList.toggle('off-mode')
       divButtons.classList.toggle('off-mode')
    }

   
})


powerButton.addEventListener('click', () => {

    if(powerButton){
       inputArea.value = ''
        inputArea.classList.toggle('off-mode')
        divButtons.classList.toggle('off-mode')
    }

})

soundButton.addEventListener('click', () =>{
    let soundEffect = true

    if(soundEffect){
        sound.play()
        soundEffect = false

    }else{
        sound.pause()
         soundEffect = true
    }
})
