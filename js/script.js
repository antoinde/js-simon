// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");

/* Consegna
-Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
-Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto 
precedentemente, tramite il prompt().
-Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare 
sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/


// -------------->  [CONFIG]  <----------------
const timer=30; //durata in secondi del tempo di attesa

//Clicco sul pulsante
const button = document.getElementById('start-button');
//Prendo il contenitore dove mettere gli elementi
const contentContainer = document.getElementById('content');
// dichiaro l'array
let arrayNumbers=[];
let userNumbers=[];

button.addEventListener('click', function() {
    console.log("Pulsante di avvio cliccato!");

    //Aggiungo classe sfondo di gioco 
    contentContainer.className = 'content2';

    //Genero 5 numeri random e li salvo nell'array
    for(let i=0; i<5; i++)
        arrayNumbers[i]=Math.floor(Math.random()* 9);
    //stampa array in console
    console.log("VALORI GENERATI: ", arrayNumbers);

    //stampa nella pagina
    contentContainer.innerHTML = '';
    for(let i=0; i<5; i++)
    contentContainer.innerHTML += `<span class="w-big-numbers m-x">${arrayNumbers[i]}</span>`;
    
    //timer di 30 secondi
    setTimeout(function(){

        // Cosa faccio dopo 30 secondi?
        console.log('Timeout!')
        //nascondo i numeri
        contentContainer.innerHTML = '';

        setTimeout(function(){
            // Chiedo all'utente di inserire i numeri
            userNumbers = getNumbersByUser();
            
            //confrontare gli array
            //quanti e quali numeri sono stati individuati
            //quanti
            let count=0;
            for(let i=0; i<5; i++){
                //scorro l'array dell'utente
                if( arrayNumbers.includes(userNumbers[i]) ) {
                    //contali
                    removeNumFromArrayNumbers(userNumbers[i]);
                    count++;
                    //stampa in console
                    console.log("Il numero ", userNumbers[i], "è presente!");
                    //stampa nella pagina
                    
                    contentContainer.innerHTML += `<div class="w-small-numbers">Numero ${userNumbers[i]} indovinato!</div>`;

                }
            }
            //quali
            console.log("NUMERI INDOVINATI: ", count);
            contentContainer.innerHTML += `<div class="w-normal-numbers">NUMERI INDOVINATI: ${count} </div>`;
            if(count==0) {
                console.log("SEI UN POLLO!");
                contentContainer.innerHTML += `<div class="w-big-numbers">SEI UN POLLO!</div>`;
            }
            if(count==5) {
                console.log("HAI VINTO!");
                contentContainer.innerHTML += `<div class="w-big-numbers">HAI VINTO!</div>`;
            }

        }, 100)
        

    }, timer*1000);
})

// --------FUNZIONI--------
function getNumbersByUser() {
    const array = [];
    for(let i=0; i<5; i++)
        array[i]=parseInt(prompt('Inserisci numeri (uno per volta) :'));
    console.log('user: ',array);
    return array;
}
function removeNumFromArrayNumbers(valueToRemove){
    //scorri lungo tutto l'array
    let firstTime=0;
    for(let i=0; i < arrayNumbers.length; i++ ){
        //se trovi il valore cercato, rimuovilo dall'array
        if(valueToRemove === arrayNumbers[i] && firstTime===0 ){
            arrayNumbers[i]= '';
            firstTime=1;
        }
    }
     // console.log("Array cancellato: ", arrayNumbers);
}