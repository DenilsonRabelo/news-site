var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=fc501c78ccf84487b212798d1ff404bb';
var req = new Request(url);
fetch(req)
    .then(response => response.json())
    .then(data => {
      let saida = ''
      let artigos = data.articles
      for (var i in artigos){
        saida += `
        <li class="card">
              <img src="${artigos[i].urlToImage}" class="card-img">
              <h4>${artigos[i].title}</h4>
              <p>${artigos[i].description}</p>
              <div class="btncc"><a target=_blank href="${artigos[i].url}" class=btn>Ler mais</a></div>
        </li>
        `
      }
      if (saida !== ""){
        const div = document.querySelector('#resultado')
        div.innerHTML = saida
      }


    })
