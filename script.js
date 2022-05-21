let valor = document.getElementById("box") //aqui eu peguei o valor do elemento q ta com id box
    let a = document.getElementById("um") //aqui eu peguei o valor do elemento q ta com id um
    let b = document.getElementById("two") //aqui eu peguei o valor do elemento q ta com id two
    let c = document.getElementById("img") //aqui eu peguei o valor do elemento q ta com id img
    let d = document.getElementById("botao")
    let f = document.getElementById("img2")
<<<<<<< Updated upstream
    let ab = document.getElementById("title")
    let ca = document.getElementById("box3")
    let img = document.getElementById("img3")
    let tirar = document.getElementById("box2")
    let zenin = document.getElementById("teste")
    let maki = document.getElementById("box4")

function one(){

if(valor.value =="Hitch" || valor.value == "hitch"){ //aq uma condição
    a.style = "display: inline" //aq eu mudei o style do elemento q ta com id no let a
    b.style = "display: none" //aq eu mudei o style do elemento q ta com id no let b
    c.style = "display: inline" //aq eu mudei o style do elemento q ta com id no let c
=======
function one(){
    
if(valor.value =="Hitch" || valor.value == "hitch"){ //aq uma condição
    a.style = "display: inline" //aq eu mudei o style do elemento q ta com id no let a
    b.style = "display: none" //aq eu mudei o style do elemento q ta com id no let b
    c.style = "visibility: visible" //aq eu mudei o style do elemento q ta com id no let c
>>>>>>> Stashed changes
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
    
    zenin.style = "display: inline"
    let final = document.getElementById("botao")
    final.style = "display: none"

    

}
else{
    a.style = "display: none"
    b.style = "display: inline"
}
}


function novo(){
    ab.innerText = "Seu personagem tem como caracteristica: Ackermann"
    a.style = "display:none"
    b.style = "display:none"
    zenin.style = "display: none"
    f.style = "display: none"
    ca.style = "display:none"
    maki.style = "display: inline"
    

}

<<<<<<< Updated upstream

function final(){
    if(valor.value=="kenny" || valor.value=="Kenny"){
        a.style = "display: inline"
        img.style = "display: inline"
        b.style = "display: none"
        let y = document.getElementById("finalb")
        y.style = "display: inline"
    }
    else{
        b.style = "display: inline"
        a.style = "display: none"
    }
}


// function redes(){
//     ab.innerText = "Me siga nas redes sociais"
//     let i = document.getElementsByClassName("h3")[0]
//     i.innerHTML = "Twitter: thexdfps Instagram: @joaoxd27"
//     a.style = "display: none"
//     img.style = "display: none"
//     maki.style = "display: none"
//     valor.style = "display: none"
//     let y = document.getElementById("finalb")
//     y.style = "display:none"
// }

function redes(){
    let i = document.getElementsByTagName("h3")[0]
    i.innerHTML = "Twitter: thexdfps\nInstagram: @joaoxd27"
    ab.innerText = "Me siga nas redes sociais"
    a.style =  "display: none"
    img.style = "display: none"
    maki.style = "display: none"
    valor.style = "display: none"
    let y = document.getElementById("finalb")
    y.style = "display: none"
}


=======
function two(){
    let ba = document.getElementById("box2")
    ba.style = "display: none"
    let ca = document.getElementById("box3")
    ca.style = "display:inline"
    let ab = document.getElementById("title")
    ab.innerText = "Seu personagem tem como caracteristica: Tropa de exploração"
    a.style = "display:none"
    b.style = "display:none"
    c.style = "visibility: hidden"
}


function three(){
if(valor.value =="Conny" || valor.value == "conny" ){
    a.style = "display: inline"
    b.style = "display: none"
    f.style = "visibility: visible"
}
else{
    a.style = "display: none"
    b.style = "display: inline"
    
}
}
>>>>>>> Stashed changes

