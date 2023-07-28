function buscaPaises(){
    var url = "https://restcountries.com/v3.1/all";
    fetch(url).then(data => data.json())
    .then(paises =>{
        console.log(paises)
        var html = "";
        for (let i = 0; i < paises.length; i++) {
            const pais = paises[i];
            
            let card_padrao = `
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="${pais.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${pais.name.common}</h5>
                      <p class="Continente: ${pais.continents[0]}</p>
                    </div>
                  </div>
                        `;

                html += card_padrao;

        }

        document.getElementById('linha').innerHTML = html;
    })
};

buscaPaises();