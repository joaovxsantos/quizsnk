
function one(){
    let valor = document.getElementById("box") //aqui eu peguei o valor do elemento q ta com id box
    let a = document.getElementById("um") //aqui eu peguei o valor do elemento q ta com id um
    let b = document.getElementById("two") //aqui eu peguei o valor do elemento q ta com id two
    let c = document.getElementById("img") //aqui eu peguei o valor do elemento q ta com id img
if(valor.value =="Hitch" || valor.value == "hitch"){ //aq uma condição
    a.style = "display: inline" //aq eu mudei o style do elemento q ta com id no let a
    b.style = "display: none" //aq eu mudei o style do elemento q ta com id no let b
    c.style = "visibility: visible" //aq eu mudei o style do elemento q ta com id no let c
}
else{
    b.style = "display:inline" //aq eu mudei o style do elemento q ta com id no let b
    a.style = "display: none" //aq eu mudei o style do elemento q ta com id no let a
    c.style = "visibility: hidden" //aq eu mudei o style do elemento q ta com id no let c
}
}

