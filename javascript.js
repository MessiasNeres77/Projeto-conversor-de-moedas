const buttonConvert = document.querySelector(".button-convert")//botão mapeado
const selectValue = document.querySelector(".select-one")//select mapeado

function buttonClicked() {//função que vai ser chamado quando o botão for clicado

    const inputDigitedValue = document.querySelector(".digit-value").value//valor do input digitado

    const h1Real = document.querySelector(".h1-value")//primeiro h1 mapeado com o valor de real

    const twoConverted = document.querySelector(".value-end")//segundo h1 mapeado com o valor convertido

    const dolarToday = 5.00//valor do dolar
    const euroToday = 5.41//valor do euro
    const libraToday = 6.32//valor da libra
    const francoSuiçoToday = 5.55//valor do franco suíço


    h1Real.innerHTML = new Intl.NumberFormat("pt-BR", {//numero em real formatado
        style: "currency",
        currency: "BRL"
    }).format(inputDigitedValue)

    if (selectValue.value == "dolar") {
        twoConverted.innerHTML = new Intl.NumberFormat("en-US", {//dolar formatado
            style: "currency",
            currency: "USD"
        }).format(inputDigitedValue / dolarToday)
    }

    if (selectValue.value == "euro") {
        twoConverted.innerHTML = new Intl.NumberFormat("de-DE", {//euro formatado
            style: "currency",
            currency: "EUR"
        }).format(inputDigitedValue / euroToday)
    }

    if (selectValue.value == "libra") {
        twoConverted.innerHTML = new Intl.NumberFormat("en-GB", {//libra formatado
            style: "currency",
            currency: "GBP"
        }).format(inputDigitedValue / libraToday)
    }

    if (selectValue.value == "franco-suiço") {
        twoConverted.innerHTML = new Intl.NumberFormat("de-DE", {//franco suíço formatado
            style: "currency",
            currency: "CHF"
        }).format(inputDigitedValue / francoSuiçoToday)
    }

    h1Real.innerHTML = new Intl.NumberFormat("pt-BR", {//numero em real formatado
        style: "currency",
        currency: "BRL"
    }).format(inputDigitedValue)
}

function troqueiNoSelect(){
    const dolarAmerican=document.querySelector(".dolar-usd")

    const imgDolar=document.querySelector(".img-usd")

    if(selectValue.value=="dolar"){
    dolarAmerican.innerHTML="Dólar americano"
    imgDolar.src="./estados-unidos (1) 1 (1).png"

    }

    if(selectValue.value=="euro"){
    dolarAmerican.innerHTML="Euro"
    imgDolar.src="Design sem nome 3 (2).png"
    }

    if(selectValue.value=="libra"){
    dolarAmerican.innerHTML="Libra"
    imgDolar.src="libra 1 (1).png"
    }

    if(selectValue.value=="franco-suiço"){
    dolarAmerican.innerHTML="Franco-Suiço"
    imgDolar.src="images.png"

    }

    buttonClicked()
}



selectValue.addEventListener("change", troqueiNoSelect)

buttonConvert.addEventListener("click", buttonClicked)//fica de olho em acda clique
