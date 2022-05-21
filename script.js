let valor = document.getElementById("box") //aqui eu peguei o valor do elemento q ta com id box
    let a = document.getElementById("um") //aqui eu peguei o valor do elemento q ta com id um
    let b = document.getElementById("two") //aqui eu peguei o valor do elemento q ta com id two
    let c = document.getElementById("img") //aqui eu peguei o valor do elemento q ta com id img
    let d = document.getElementById("botao")
    let f = document.getElementById("img2")
    let ab = document.getElementById("title")
    let ca = document.getElementById("box3")
    let img = document.getElementById("img3")

function one(){

if(valor.value =="Hitch" || valor.value == "hitch"){ //aq uma condição
    a.style = "display: inline" //aq eu mudei o style do elemento q ta com id no let a
    b.style = "display: none" //aq eu mudei o style do elemento q ta com id no let b
    c.style = "display: inline" //aq eu mudei o style do elemento q ta com id no let c
    d.style = "display: inline"
}
else{
    b.style = "display:inline" //aq eu mudei o style do elemento q ta com id no let b
    a.style = "display: none" //aq eu mudei o style do elemento q ta com id no let a
    c.style = "visibility: hidden" //aq eu mudei o style do elemento q ta com id no let c
}


}

function two(){
    let ba = document.getElementById("box2")
    ba.style = "display: none"
    let ca = document.getElementById("box3")
    ca.style = "display:inline"
    
    ab.innerText = "Seu personagem tem como caracteristica: Tropa de exploração"
    a.style = "display:none"
    b.style = "display:none"
    c.style = "visibility: hidden"
}


function three(){
if(valor.value =="Conny" || valor.value == "conny" ){
    a.style = "display: inline"
    b.style = "display: none"
    f.style = "display: inline"
}
else{
    a.style = "display: none"
    b.style = "display: inline"

}
b.style = "display: none"
d.addEventListener ("click", four)
ca.addEventListener ("click", four)
}


function four(){
    f.style = "display: none"
    
    ab.innerText = "Seu personagem tem como caracteristica: Ackermann"
    let teste = valor.value
    teste = "kenny"
    if(valor.value == "kenny" || valor.value == "Kenny"){
        a.style = "display: inline"
        b.style = "display: none"
        img.style = "display: inline"
    }
    else{
        a.style = "display: none"
        b.style = "display: inline"
    }
    
}