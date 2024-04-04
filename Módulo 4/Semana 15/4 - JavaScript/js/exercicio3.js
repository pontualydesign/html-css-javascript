const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inVeiculo.value
    const valor = Number(frm.inValor.value)

    const entrada = valor * 0.50
    const parcelas = (valor * 0.50) / 12

    resp1.innerText = `Veículo ${nome}`
    resp2.innerText = `Entrada de ${entrada.toFixed(2)}`
    resp3.innerText = `+ 12 vezes de ${parcelas.toFixed(2)}`

    e.preventDefault()

})