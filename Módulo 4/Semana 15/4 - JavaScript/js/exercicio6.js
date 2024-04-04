const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value)
    const minutos = Number(frm.inMinutos.value)

    const total = (minutos / 15) * preco

    resp1.innerText = `Valor à cada 15 minutos R$ ${preco.toFixed(2)}`
    resp2.innerText = `Total à pagar R$ ${total.toFixed(2)}`

    e.preventDefault()
})