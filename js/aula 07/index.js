function inicializa(){
    // FOCUS no INPUT
    document.getElementsByName('txtLogin')[0].focus()
}

// OUVINDo EVENTOS
var form = document.getElementsByName('formLogin')[0]
form.addEventListener("submit", logar)

function logar(e){    // event = e
   e.preventDefault()

    //  Limpar Campo de texto
//    document.getElementsByName('txtLogin')[0].value = ""
//    document.getElementsByName('txtSenha')[0].value = ""

    // VARIALVEL LOGIN
    var login = document.getElementsByName('txtLogin')[0].value
   
    // Mostrat usuário
    document.querySelector('header div').style.display = 'block'
    document.querySelector('div span').innerHTML = 'login'
    
    // OCULTAR O FORM
    form.style.display = 'none'
}

var selectMode = document.getElementsByName('selectMode')[0]
selectMode.addEventListener('change', function(){
    // console.log('Teste select ' + selectMode.value)

    if(selectMode.value == 1){
        document.body.style.setProperty('--color2', '#354f52')
        document.body.style.setProperty('--color3', '#84a98c')
    }else{selectMode.value == 2
        document.body.style.setProperty('--color2', '#2f3e46')
        document.body.style.setProperty('--color3', '#354f52')
        
    }
})

// ALTERAR COR
var txtCor = document.getElementsByName('txtxColor')[0]
txtCor.addEventListener('change', function(){
    document.body.style.backgroundColor = txtColor.value
})