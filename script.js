let input = document.getElementById('content')
let button = document.getElementById("button")
let res = document.getElementById('res')

function mudarNome(){
    res.innerHTML = `Boa tarde,${input.value}, meu nome é Isaque, sou do setor financeiro da InforNet. E o motivo do meu contato é em relação ao boleto do dia 20/08 . Houve algum problema em relação ao pagamento?`
}