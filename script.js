function calcularimc() {
    let h = (document.getElementById('h').value)
    let p = document.getElementById('p').value
    let cal = p/(h**2)
    document.getElementById('resultado').innerText = `SEU IMC É DE: ${cal.toFixed(2)}`

    let cla = ""
    if(cal < 18.5){
        cla = "Está abaixo do peso normal"
    }else if(cal >= 18.5 && cal < 24.9){
        cla = "Seu peso está normal"
    }else if(cal > 25.0 && cal < 29.9){
        cla = "Está acima do peso normal"
    }else if(cal > 30.0 && cal < 34.9){
        cla = "Obesidade classe II"
    }else if(cal > 35.0 && cal < 39.9){
        cla = "Obesidade nivel II"
    }else{
        cla = "Obesidade nivel III"
    }
    document.getElementById('classe').innerText = `${cla}`
}

function porCima(obj){ 
    obj.innerHTML = "Tabela IMC";
    obj.innerHTML = "<img src='oiio.png' id='img' style='border-radius: 10px; width:450px; height:250px; margin-top: -480px; margin-left: 100px;'>"
    
}
 
function porFora(obj){
    obj.innerHTML = "Tabela IMC";
}
