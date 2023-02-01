// COLLEGAMENTI JS CON HTML
const formBtnElementGen = document.querySelector('.buttons-js .gen')
const formElementName = document.querySelector(' input[type="text"]')
const formElementkm = document.querySelector('.km-form')
const formElementEta = document.querySelector('select[name="etapasseggero"]')

console.log(formBtnElementGen,formElementName,formElementkm,formElementEta)
// prezzo fisso km
const pricekm = 0.21
// prezzo in base al KM
formBtnElementGen.addEventListener('click', function () {
	console.log(' calcola il prezzo del biglietto')

	console.log(formElementkm.value, formElementEta)

	let KmOfElement = formElementkm.value
	KmOfElement = KmOfElement * pricekm
    console.log(KmOfElement)
    // METTIAMO L'OPZIONE SCONTO IN BASE ALL'ETA SUL PREZZO STANDARD
    let sectionage = formElementEta.value

	switch (sectionage) {
		case 'under-18':
			KmOfElementdiscount = KmOfElement / 100 * 20
			break
		case 'over65':
			KmOfElementdiscount = KmOfElement / 100 * 40
			break
		case 'notdiscount':
			KmOfElementdiscount = 0
			break
	}
    console.log(KmOfElementdiscount)
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
    
    

	
})



