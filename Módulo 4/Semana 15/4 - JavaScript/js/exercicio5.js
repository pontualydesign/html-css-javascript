const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) =>{
    const nome = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const total = Math.floor(preco * 2)

    resp1.innerText = `Produto: ${nome}`
    resp2.innerText = `Leve 2 e pague apenas R$ ${total.toFixed(2)}`

    e.preventDefault()
})