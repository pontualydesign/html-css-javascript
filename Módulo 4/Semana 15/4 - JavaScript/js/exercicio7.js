const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value
    const preco = Number(frm.inPreco.value)

    const desconto = preco * 0.50
    const total = (preco * 2) + desconto

    resp1.innerText = `Promoção: ${nome}`
    resp2.innerText = `Leve 3 e pague apenas R$ ${total.toFixed(2)}`
    resp3.innerText = `O terceiro produto sairá por apenas R$ ${desconto.toFixed(2)}`

    e.preventDefault()
})