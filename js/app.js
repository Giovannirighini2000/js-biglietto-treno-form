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

	
})

