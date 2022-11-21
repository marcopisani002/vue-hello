//nella function createApp salvo l'oggetto globale vue
const { createApp } = Vue;

// invochiamo la funzione passando come argomento un oggetto

createApp({
    data() {
        // la funzione data deve SEMPRE ritornare un oggetto
        return{
            nome:"Bill",
            cognome:"Gates",
            fotoCeo:"img/bill.jpg",
            descriptionUser:"imprenditore, programmatore, informatico e filantropo statunitense. Principale fondatore di 'Microsoft Corporation'"
        };




    },
}).mount("#app")