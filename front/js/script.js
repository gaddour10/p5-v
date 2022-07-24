let url="http://localhost:3000/api/products"
fetch(url).then((response) =>
      response.json().then ((data) =>{
      for (kanap of data){
        let items=document.querySelector("#items");
        items.innerHTML+=
         ` <a href="./product.html?id=${kanap._id}">
            <article>
              <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
              <h3 class="productName">${kanap.name}</h3>
              <p class="productDescription">${kanap.description}</p>
            </article>
          </a> `
      }}
      )
)