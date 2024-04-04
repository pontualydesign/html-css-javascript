const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")

frm.addEventListener("submit", (e) =>{
    const queroSaber = Number(frm.inNum1.value)
    const valorTotal = Number(frm.inNum2.value)

    const porcento = (queroSaber * 100) / valorTotal

    resp1.innerText = `${queroSaber} representa ${porcento} % de ${valorTotal}`

    e.preventDefault()
})