let valores = []

function mostrarErro(msg) {
    const msgErro = document.getElementById('msgErro')
    msgErro.textContent = msg
    msgErro.classList.remove('shake')
    void msgErro.offsetWidth
    msgErro.classList.add('shake')
}

function lancar() {
    const numInput = document.getElementById('txtn')
    const num = Number(numInput.value)

    if (!numInput.value.trim()) return mostrarErro('Adicione um valor!')
    if (num < 1 || num > 100) return mostrarErro('Digite um número entre 1 e 100!')
    if (valores.includes(num)) return mostrarErro('Número já adicionado!')

    valores.push(num)

    const lista = document.getElementById('txtals')
    const item = document.createElement('option')
    item.text = `Valor ${num} adicionado`
    item.style.backgroundColor = '#FFF3E0'
    lista.appendChild(item)

    setTimeout(() => item.style.backgroundColor = '', 800)

    numInput.value = ''
    numInput.focus()
    document.getElementById('msgErro').textContent = ''
}

function analisar() {
    const res = document.getElementById('res')
    const msgErro = document.getElementById('msgErro')

    res.innerHTML = ''
    msgErro.textContent = ''

    if (valores.length === 0) return mostrarErro('Adicione valores primeiro!')

    const total = valores.length
    const maior = Math.max(...valores)
    const menor = Math.min(...valores)
    const soma = valores.reduce((a, b) => a + b, 0)
    const media = soma / total

    res.innerHTML = `
        <p>Total de valores: <strong>${total}</strong></p>
        <p>Maior valor: <strong>${maior}</strong></p>
        <p>Menor valor: <strong>${menor}</strong></p>
        <p>Soma de todos: <strong>${soma}</strong></p>
        <p>Média dos valores: <strong>${media.toFixed(2)}</strong></p>
    `
}

function limpar() {
    valores = []
    document.getElementById('txtals').innerHTML = ''
    document.getElementById('res').innerHTML = ''
    document.getElementById('msgErro').textContent = ''
    document.getElementById('txtn').focus()
}