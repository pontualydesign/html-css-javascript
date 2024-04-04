const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) =>{
    const quilos = Number(frm.inQuilos.value)
    const gramas = Number(frm.inGramas.value)

    const total = (quilos / 1000) * gramas

    resp1.innerText = `Quilos consumidos (Kg): ${quilos}`
    resp2.innerText = `Valor à pagar por pessoa R$ ${total.toFixed(2)}`

    e.preventDefault()
})