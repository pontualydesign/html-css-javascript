const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) =>{
    const filme = frm.inFilme.value
    const duracao = frm.inDuracao.value

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    resp1.innerText = `O Filme é ${filme}`
    resp2.innerText = `Ele contém ${horas} hora(s) e ${minutos} minutos(s)`

    e.preventDefault()
})