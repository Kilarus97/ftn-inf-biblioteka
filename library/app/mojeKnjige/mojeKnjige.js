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


let knjiga1 = new Knjiga (1,'Yu-Suf-Oh','05.05.2025',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b0de984-6bc3-4839-9fbe-8a10342a9482/dfz9ajs-83811b0f-4567-41cd-ac8f-1bb87696a964.jpg/v1/fit/w_828,h_1210,q_70,strp/sibirski_plavac_by_yusufohkarte_dfz9ajs-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg2OSIsInBhdGgiOiJcL2ZcLzFiMGRlOTg0LTZiYzMtNDgzOS05ZmJlLThhMTAzNDJhOTQ4MlwvZGZ6OWFqcy04MzgxMWIwZi00NTY3LTQxY2QtYWM4Zi0xYmI4NzY5NmE5NjQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ryQcboNgW_DQK40kANi5wd02y-RUktUCQia09pmjz5U'
    ,'Legenda Sibirskog plavca i Kapetana Dragasevica',5)
let nizIznajljenihKnjiga = [knjiga1]
let nizVracenihKnjiga = []

let knjiga2 = new Knjiga(2, 'Plavi Grad', '07.05.2025',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Books_Flat_Icon_Vector.svg/1024px-Books_Flat_Icon_Vector.svg.png',
    'Avantura u zaboravljenom gradu.', 3)

let knjiga3 = new Knjiga(3, 'Planine i Mi', '01.03.2024',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Book_icon_1.png/768px-Book_icon_1.png',
    'Putopis kroz snežne planine.', 4)

let nizDostupnihKnjiga = [knjiga2, knjiga3]


//ispisiKnjige(nizIznajljenihKnjiga)
//ispisiDostupneKnjige(nizDostupnihKnjiga)
//sacuvajArtikalUlokalStorage(nizIznajljenihKnjiga)


function ispisiKnjige(nizIznajljenihKnjiga){
    let tabela = document.querySelector('#knjigeBody')
    tabela.innerHTML = ''

    
    for(let knjiga of nizIznajljenihKnjiga){
        let noviRed = tabela.insertRow()
    
        let slikaCell = noviRed.insertCell()
        let img = document.createElement('img');
        img.src = knjiga.urlSlike; 
        img.alt = 'Slika se ucitava';
        img.style.width = '100px'; //smanjio sam jer ne moze stati
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

        let iznajmiCell = noviRed.insertCell();
        let iznajmiBtn = document.createElement('button');
        iznajmiBtn.textContent = 'Vrati';
        iznajmiBtn.style.width = '80px'  //smanjio sam visinu i sirinu
        iznajmiBtn.style.height = '40px'
        iznajmiBtn.style.borderRadius = '5px'
        iznajmiBtn.style.backgroundColor = '#0056b3'
        iznajmiCell.appendChild(iznajmiBtn);

        iznajmiBtn.addEventListener('click', () => {
            let indexZaVracanje = nizIznajljenihKnjiga.findIndex(k => k.id === knjiga.id);
            if (indexZaVracanje !== -1) {
                nizIznajljenihKnjiga.splice(indexZaVracanje, 1);
                //nizDostupnihKnjiga.push(indexZaVracanje)  Treba da vraca objekat a ne samo index

                nizDostupnihKnjiga.push(knjiga)
                ispisiKnjige(nizIznajljenihKnjiga);
                ispisiDostupneKnjige(nizDostupnihKnjiga)
                sacuvajArtikalUlokalStorage(nizIznajljenihKnjiga)
                localStorage.setItem("dostupneKnjige", JSON.stringify(nizDostupnihKnjiga));
            }
        });
}
}

function ispisiDostupneKnjige(nizDostupnihKnjiga){
    let tabela = document.querySelector('#dostupneBody')
    tabela.innerHTML = ''

    for(let knjiga of nizDostupnihKnjiga){
        let noviRed = tabela.insertRow()

        let slikaCell = noviRed.insertCell()
        let img = document.createElement('img');
        img.src = knjiga.urlSlike;
        img.alt = 'Slika se učitava'
        img.style.width = '100px'
        img.style.height = 'auto'
        slikaCell.appendChild(img)

        let idCell = noviRed.insertCell()
        idCell.textContent = knjiga.id

        let nazivCell = noviRed.insertCell()
        nazivCell.textContent = knjiga.naziv

        let datumCell = noviRed.insertCell()
        datumCell.textContent = knjiga.datum

        let opisCell = noviRed.insertCell()
        opisCell.textContent = knjiga.opis

        let popularnostCell = noviRed.insertCell()
        popularnostCell.textContent = '★'.repeat(knjiga.popularnost)

        let iznajmiCell = noviRed.insertCell()
        let iznajmiBtn = document.createElement('button')
        iznajmiBtn.textContent = 'Iznajmi'
        iznajmiBtn.style.width = '80px'
        iznajmiBtn.style.height = '40px'
        iznajmiBtn.style.borderRadius = '5px'
        iznajmiBtn.style.backgroundColor = 'green'
        iznajmiCell.appendChild(iznajmiBtn);

        iznajmiBtn.addEventListener('click', () => {
            let indexZaIznajmljivanje = nizDostupnihKnjiga.findIndex(k => k.id === knjiga.id)
            if (indexZaIznajmljivanje !== -1) {
                // Uklanjamo iz dostupnih
                let iznajmljenaKnjiga = nizDostupnihKnjiga.splice(indexZaIznajmljivanje, 1)[0]
                // Dodajemo u iznajmljene
                nizIznajljenihKnjiga.push(iznajmljenaKnjiga)

                // Osvježi prikaz
                ispisiDostupneKnjige(nizDostupnihKnjiga)
                ispisiKnjige(nizIznajljenihKnjiga)
                sacuvajArtikalUlokalStorage(nizIznajljenihKnjiga)
            }
        })
    }
}


    function sacuvajArtikalUlokalStorage(nizKnjiga){
    console.log("Čuvanje u localStorage:", nizKnjiga);
    localStorage.setItem("iznajmljeneKnjige",JSON.stringify(nizIznajljenihKnjiga))
    }

function ucitajArtikalIzLokalStorage(){
        let sacuvaniPodaci = localStorage.getItem("sveKnjige")
        let sacuvaniPodaci2 = localStorage.getItem("iznajmljeneKnjige")
        //kod ispod cu malo optimizovati da ne duplira knjige sa prelaskom stranica
    if(sacuvaniPodaci){
        let nizKnjiga = JSON.parse(sacuvaniPodaci)
        let iznajmljeneKnjige = []

        if (sacuvaniPodaci2){
        iznajmljeneKnjige= JSON.parse(sacuvaniPodaci2)
        }

        nizIznajljenihKnjiga = iznajmljeneKnjige
        nizDostupnihKnjiga = []

        for (let i = 0; i < nizKnjiga.length; i++) {
            let postoji = false

            for (let j = 0; j < iznajmljeneKnjige.length; j++) {
                if (nizKnjiga[i].id === iznajmljeneKnjige[j].id) {
                    postoji = true
                    break;
                }
            }

            if (!postoji) {
                nizDostupnihKnjiga.push(nizKnjiga[i]);
            }
        }

        ispisiKnjige(nizIznajljenihKnjiga);
        ispisiDostupneKnjige(nizDostupnihKnjiga);
    } 
    // primjetio sam problem kada ucitam prvo ovu stranicu nima renderovanja tabela zato cu dodati ovo.
    else {
        let knjiga1 = new Knjiga(1, 'Yu-Suf-Oh', '05.05.2025',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b0de984-6bc3-4839-9fbe-8a10342a9482/dfz9ajs-83811b0f-4567-41cd-ac8f-1bb87696a964.jpg/v1/fit/w_828,h_1210,q_70,strp/sibirski_plavac_by_yusufohkarte_dfz9ajs-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg2OSIsInBhdGgiOiJcL2ZcLzFiMGRlOTg0LTZiYzMtNDgzOS05ZmJlLThhMTAzNDJhOTQ4MlwvZGZ6OWFqcy04MzgxMWIwZi00NTY3LTQxY2QtYWM4Zi0xYmI4NzY5NmE5NjQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ryQcboNgW_DQK40kANi5wd02y-RUktUCQia09pmjz5U',
       'Legenda Sibirskog plavca i Kapetana Dragasevica', 5)

        let knjiga2 = new Knjiga(2, 'Gospodar na Prstenje', "06.05.2025", '',
       'Prica od malechki frodo kako gi se usunjava u Mordor', 4)

        let nizKnjiga = [knjiga1, knjiga2]
        localStorage.setItem("sveKnjige", JSON.stringify(nizKnjiga))
        nizDostupnihKnjiga = nizKnjiga   
        nizIznajljenihKnjiga = []             

        ispisiKnjige(nizIznajljenihKnjiga) 
        ispisiDostupneKnjige(nizDostupnihKnjiga)
    }
}

    document.addEventListener("DOMContentLoaded", function(){
    ucitajArtikalIzLokalStorage()
});