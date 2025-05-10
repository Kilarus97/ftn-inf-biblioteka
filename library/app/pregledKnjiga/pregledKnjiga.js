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

let knjiga2 = new Knjiga (2,'Gospodar na Prstenje',"06.05.2025","",'Prica od malechki frodo kako gi se usunjava u Mordor',4)
let nizKnjiga = [knjiga1,knjiga2]

ispisiKnjige(nizKnjiga)

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
            }
        });
}
}