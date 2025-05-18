'use strict'
class Knjiga {
    constructor(id,naziv,datum,urlSlike,opis,popularnost){
        this.id = id
        this.naziv = naziv
        this.datum = datum
        this.urlSlike = urlSlike
        this.opis = opis
        this.popularnost = popularnost
    }
}

//Ovaj dio koda treba ukloniti. Nakon funkcionalnosti dodavanja dolazilo je do greske.
// Inicijalizaciju tabele i ucitavanje local storagea cu stopiti u Mirkovu funkciju ucitajArtikalIzLocalStorage(nizKnjiga)

//let knjiga1 = new Knjiga (1,'Yu-Suf-Oh','05.05.2025',
   // 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b0de984-6bc3-4839-9fbe-8a10342a9482/dfz9ajs-83811b0f-4567-41cd-ac8f-1bb87696a964.jpg/v1/fit/w_828,h_1210,q_70,strp/sibirski_plavac_by_yusufohkarte_dfz9ajs-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg2OSIsInBhdGgiOiJcL2ZcLzFiMGRlOTg0LTZiYzMtNDgzOS05ZmJlLThhMTAzNDJhOTQ4MlwvZGZ6OWFqcy04MzgxMWIwZi00NTY3LTQxY2QtYWM4Zi0xYmI4NzY5NmE5NjQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ryQcboNgW_DQK40kANi5wd02y-RUktUCQia09pmjz5U'
   // ,'Legenda Sibirskog plavca i Kapetana Dragasevica',5)

//let knjiga2 = new Knjiga (2,'Gospodar na Prstenje',"06.05.2025","",'Prica od malechki frodo kako gi se usunjava u Mordor',4)
//let nizKnjiga = [knjiga1,knjiga2]

//ispisKnjige sam premjestio na zadnje linije koda pri ucitavanju stranice
//ispisiKnjige(nizKnjiga)

//Ovdje sam izbacio sacuvavanje jer artikli koji se dodaju  ne ostaju u local storage nakon refresovanja stranice
//sacuvajArtikalUlokalStorage(nizKnjiga)

let nizKnjiga = [] //Prazan niz(u njega ce se ubacivati knjige pri ucitavanju stranice iz local storage/ili inicijalizovane


function ispisiKnjige(nizKnjiga){
    let tabela = document.querySelector('#knjigeBody')
    tabela.innerHTML = ''

    
    for(let knjiga of nizKnjiga){
        let noviRed = tabela.insertRow()
    
        let slikaCell = noviRed.insertCell()
        let img = document.createElement('img');
        img.src = knjiga.urlSlike; 
        img.alt = 'Slika se ucitava';
        img.style.width = '200px'; 
        img.style.height = 'auto'; 
        slikaCell.appendChild(img);
    
        let idCell = noviRed.insertCell()
        idCell.textContent = knjiga.id

        let nazivCell = noviRed.insertCell()
        nazivCell.textContent = knjiga.naziv

        let datumCell = noviRed.insertCell()
        datumCell.textContent = knjiga.datum

        let opisCell = noviRed.insertCell()
        opisCell.textContent = knjiga.opis

        let popularnostCell = noviRed.insertCell();
        popularnostCell.textContent = '★'.repeat(knjiga.popularnost);

        let obrisiCell = noviRed.insertCell();
        let obrisiBtn = document.createElement('button');
        obrisiBtn.textContent = 'Obriši';
        obrisiBtn.style.width = '190px'
        obrisiBtn.style.height = '50px'
        obrisiBtn.style.borderRadius = '5px'
        obrisiBtn.style.backgroundColor = '#0056b3'
        obrisiCell.appendChild(obrisiBtn);

        obrisiBtn.addEventListener('click', () => {
            let indexZaBrisanje = nizKnjiga.findIndex(k => k.id === knjiga.id);
            if (indexZaBrisanje !== -1) {
                nizKnjiga.splice(indexZaBrisanje, 1); 
                ispisiKnjige(nizKnjiga);
                sacuvajArtikalUlokalStorage(nizKnjiga) 
            }
        });
}
}

function sacuvajArtikalUlokalStorage(nizKnjiga){
    console.log("Čuvanje u localStorage:", nizKnjiga);
    localStorage.setItem("sveKnjige",JSON.stringify(nizKnjiga))
}

// Ovu funkciju cu da nadogradim
function ucitajArtikalIzLokalStorage(){
    let sacuvaniPodaci = localStorage.getItem("sveKnjige")

    if (!sacuvaniPodaci) {
        // Ako nema ništa u localStorage, kreiraj default knjige
        let knjiga1 = new Knjiga(1, 'Yu-Suf-Oh', '05.05.2025',
             'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b0de984-6bc3-4839-9fbe-8a10342a9482/dfz9ajs-83811b0f-4567-41cd-ac8f-1bb87696a964.jpg/v1/fit/w_828,h_1210,q_70,strp/sibirski_plavac_by_yusufohkarte_dfz9ajs-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg2OSIsInBhdGgiOiJcL2ZcLzFiMGRlOTg0LTZiYzMtNDgzOS05ZmJlLThhMTAzNDJhOTQ4MlwvZGZ6OWFqcy04MzgxMWIwZi00NTY3LTQxY2QtYWM4Zi0xYmI4NzY5NmE5NjQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ryQcboNgW_DQK40kANi5wd02y-RUktUCQia09pmjz5U',
            'Legenda Sibirskog plavca i Kapetana Dragasevica', 5);

        let knjiga2 = new Knjiga(2, 'Gospodar na Prstenje', "06.05.2025", '',
            'Prica od malechki frodo kako gi se usunjava u Mordor', 4);

        nizKnjiga = [knjiga1, knjiga2];
        sacuvajArtikalUlokalStorage(nizKnjiga);
    } else {
        // Ako već postoji nešto u localStorage, učitaj to
        nizKnjiga = JSON.parse(sacuvaniPodaci);
    }
}

function getFormData() {
    const form = document.querySelector('#forma')
    const formData = new FormData(form)
    const naziv = formData.get('naziv')
    const datum = formData.get('datum')
    const opis = formData.get('opis')
    const slika = formData.get('slika')
    const popularnost = formData.get('popularnost')
  
    return {
      naziv,
      datum,
      slika,
      opis,
      popularnost
    }
  }
  

function calculateNewId(nizKnjiga) {
    let maxId = 0
    for (let i = 0; i < nizKnjiga.length; i++) {
      if(nizKnjiga[i].id > maxId) {
        maxId = nizKnjiga[i].id
      }
    }
    return maxId + 1
  }  

  function dodajKnjigu (nizKnjiga) {
    let dodaj = document.querySelector('#dodaj')
    let form = document.querySelector('#forma') 

    dodaj.addEventListener('click', function() {
        console.log("Klik na dugme Dodaj detektovan");

      const formaKnjiga= getFormData()
    
      let newId = calculateNewId(nizKnjiga)
      nizKnjiga.push(new Knjiga(newId, formaKnjiga.naziv, formaKnjiga.datum, formaKnjiga.slika, formaKnjiga.opis, formaKnjiga.popularnost))
      ispisiKnjige(nizKnjiga)

      localStorage.setItem("sveKnjige",JSON.stringify(nizKnjiga))
      form.reset()
    })
  }

  //Dodao sam neimenovanu funkciju za listener i funkciju za dodavanje knjiga
  document.addEventListener("DOMContentLoaded", function() {
    ucitajArtikalIzLokalStorage()
    ispisiKnjige(nizKnjiga) //ovde sam dodao ispis pri ucitavanju stranice
    dodajKnjigu(nizKnjiga)
    });