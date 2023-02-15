let lampadaQuebrada = false 

function acenderLampada() {
    if(!lampadaQuebrada)
  {const lampada = document.getElementById('lampada') //pega todo o elemento pelo id
  lampada.src = 'imgs/lamp-acesa.jpg'}
}

function apagarLampada() {
    if(!lampadaQuebrada){
    const lampada = document.getElementById('lampada') //pega todo o elemento pelo id
    lampada.src = 'imgs/lamp-apagada.jpg'}
  }

function quebrarLampada() {
    if(!lampadaQuebrada)
    {const lampada = document.getElementById('lampada') //pega todo o elemento pelo id
    lampada.src = 'imgs/lamp-quebrada.jpg'
    lampadaQuebrada = true

    //criar elemento
    const botaoRestaurar = document.createElement('button')
    botaoRestaurar.innerText = 'Restaurar lampada'
    botaoRestaurar.onclick = restaurarLampada
    botaoRestaurar.id = 'btn-restaurar'


    //segunda parte: adicionar o elemento criado aonde queremos
    const divContainer = document.querySelector('.container')
    divContainer.appendChild(botaoRestaurar)}
  
}


  function restaurarLampada(){
    const lampada = document.getElementById('lampada') //pega todo o elemento pelo id
    lampada.src = 'imgs/lamp-apagada.jpg'
    lampadaQuebrada = false

    //remover botão
    const btnRestaurar = document.querySelector('#btn-restaurar')
    btnRestaurar.remove()

  }