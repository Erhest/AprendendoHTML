//  QND PAGINA CARREGAR
function inicializa(){
    var titulo = document.createElement('h1')
    titulo.innerText = 'Olá. Mundo'    
    console.log(titulo)


    // Adiciona Elemento CRIADO no Body da pagina
    document.body.appendChild(titulo)
    // Remover
    // document.body.removeChild(titulo)

    //  ADICIONAR 
    var logoImg = document.createElement('img')
    logoImg.setAttribute('width', '200')
    logoImg.setAttribute('alt', 'Lampada desligada')
    logoImg.setAttribute('src', '../aula 05/Assets/img/lampOff.gif')
    logoImg.title = "Imagem de uma Lampada Off"
    document.body.appendChild(logoImg)
    
    console.log('CAMINHO IMG ' + logoImg.getAttribute('src'))
    // PARAGRAFO
    var parag = document.createElement('p')
    parag.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laudantium ipsam a corporis ea, velit necessitatibus provident laboriosam illum quis cumque natus ad atque ut accusantium! Numquam error eos omnis.'



}

function newInput(e){
    e.preventDefault()
    // CRIAR INPUT
    var moreInput = document.createElement('input')    
    var linha = document.createElement('br')

    // ADD tributos
    moreInput.setAttribute('type', 'text')
    moreInput.setAttribute('class', 'inpt')
    moreInput.setAttribute('class', 'inpt')
    // Colocando evento no input
    moreInput.setAttribute('onblur', 'exibirTootips()')

    // EXIBIR INPUT
    document.querySelectorAll('.container-form form fieldset')[1].appendChild(moreInput)
    // Add br no Fieldset
    document.querySelectorAll('.container-form form fieldset')[1].appendChild(linha)    
}

function rmInput(e){
    e.preventDefault()

    // Quantidade de Itens que possuem class='inpt'
    var tamList = document.querySelectorAll('.int').length

    var lastInput = document.querySelectorAll('.inpt')[tamList - 1]

    console.log(lastInput)
    if(tamList > 1){
        document.querySelectorAll('.container-form form fieldset')[1].removeChild(lastInput)
    }

    // Remover ultimo Input da lista
    document.querySelectorAll('.container-form form fieldset')[1]
}

// EXIBIR TOOTIPS
function exibirTootips(){
    console.clear()
    // console.log(document.getElementsByClassName('inpt')[0].value)
    var texto = ""
    // texto += document.getElementsByClassName('inpt')[0].value
    // Cria um Val  --operação logica

    for(var i = 0; i < document.getElementsByClassName('inpt').length; i++){
        texto+= '<span>' + document.getElementsByClassName('inpt')[i].value + '<span>'
    }
    // Add a tela
    document.querySelector('p').innerHTML = texto
}