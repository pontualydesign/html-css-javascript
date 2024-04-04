const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const gramas = Number(frm.inGramas.value)

    const total = (gramas / 1000) * 17.26

    resp.innerText = `Valor total à pagar R$ ${total.toFixed(2)}`

    e.preventDefault()
})