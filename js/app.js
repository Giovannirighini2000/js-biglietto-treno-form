// COLLEGAMENTI JS CON HTML
const formBtnElementGen = document.querySelector('.buttons-js .gen')
const formElementName = document.querySelector(' input[type="text"]')
const formElementkm = document.querySelector('.km-form')
const formElementEta = document.querySelector('select[name="etapasseggero"]')

console.log(formBtnElementGen,formElementName,formElementkm,formElementEta)
// prezzo fisso km
const pricekm = 0.21
// prezzo in base al KM
let KmOfElementdiscount
formBtnElementGen.addEventListener('click', function () {
	console.log(' calcola il prezzo del biglietto')

	console.log(parseFloat(formElementkm.value), formElementEta)

	let KmOfElement = parseFloat(formElementkm.value) 
	KmOfElement = KmOfElement * pricekm
    KmOfElement = parseFloat(KmOfElement)
    console.log(KmOfElement)
    // METTIAMO L'OPZIONE SCONTO IN BASE ALL'ETA SUL PREZZO STANDARD
    let sectionage = formElementEta.value

	switch (sectionage) {
		case 'under-18':
			KmOfElementdiscount = KmOfElement - KmOfElement / 100 * 20
			break
		case 'over65':
			KmOfElementdiscount = KmOfElement - KmOfElement / 100 * 40
			break
		case 'notdiscount':
			KmOfElementdiscount = KmOfElement - 0
			break
	}
    console.log(KmOfElementdiscount)
    let priceDiscount
    priceDiscount = KmOfElement - KmOfElementdiscount 
    console.log(priceDiscount)

    // PRENDIAMO DALLA CONSOLE IL NOME DELL'UTENTE

    let trasfName = formElementName
    trasfName = formElementName.value
    console.log(trasfName)
    // BIGLIETTO PASSEGGERO
    // nome
    let nomePass = document.getElementById('nomepass')
    nomePass.innerHTML = formElementName.value
    console.log(nomePass)
    // costo biglietto
    let priceticket = document.getElementById('ticketprice')
    priceticket.innerHTML = KmOfElementdiscount.toFixed(2) + ('€')
    // GENERAZIONE CARROZZA NUMERO RANDOM
    let carX = parseInt(Math.random() * 15 ) + 1 ;
    console.log(carX)
    let carRandom = document.getElementById('carnumber')
    carRandom.innerHTML = carX
    // GENERAZIONE CODICE CP
    let cpNumber = parseInt(Math.random() * 994239 ) + 1 ;
    console.log(cpNumber)
    let cpGen = document.getElementById('Numbercp')
    cpGen.innerHTML = cpNumber

    

	
})



