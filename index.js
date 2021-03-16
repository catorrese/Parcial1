let requestURL =
  "https://gist.githubusercontent.com/jhonatan89/719f8a95a8dce961597f04b3ce37f97b/raw/4b7f1ac723a14b372ba6899ce63dbd7c2679e345/products-ecommerce";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
let tableBody = document.getElementById("tbody");
const filtro = document.getElementById("filter");
const lupa = document.getElementById("lupa");
const modal = document.getElementById("myModal");
let favs = Array();
const corazon = document.getElementById("corazon");

request.onload = function () {
  if (request.status == 200) {
    const datos = Array.from(request.response.items);
    createTable(datos);
    lupa.addEventListener("click", function () {
      let filt = filtro.value;
      let new_tbody = document.createElement("tbody");
      let contador = 0;
      datos.forEach((element) => {
        let esta = false;
        element.categories.forEach((categoria) => {
          if (categoria == filt) {
            esta = true;
          }
        });
        if (esta) {
          let row = document.createElement("tr");
          row.classList.add("fila");

          let img = document.createElement("img");
          img.src = element.picture;
          img.classList.add("imagen");
          img.addEventListener("click", function () {
            let new_tbody = document.createElement("tbody");
            let detalle = document.createElement("tr");
            detalle.classList.add("detalle");

            let cont = document.createElement("div");
            cont.classList.add("cont");

            let img1 = document.createElement("img");
            img1.src = element.picture;
            img1.classList.add("imagen1");
            cont.appendChild(img1);

            let cont1 = document.createElement("div");
            cont1.classList.add("cont1");

            let cant = document.createElement("p");
            cant.textContent =
              element.condition + " | " + element.sold_quantity + " vendidos";
            cant.classList.add("cant");
            cont1.appendChild(cant);

            let title = document.createElement("p");
            title.textContent = element.title;
            title.classList.add("title2");
            cont1.appendChild(title);

            let price1 = document.createElement("p");
            price1.textContent = "$ " + parsePrice(element.price.amount);
            price1.classList.add("price1");
            cont1.appendChild(price1);

            let comprar = document.createElement("button");
            comprar.textContent = "Comprar";
            comprar.classList.add("comprar");
            comprar.addEventListener("click", function () {
              modal.style.display = "block";
            });
            cont1.appendChild(comprar);

            let quit = document.createElement("button");
            quit.textContent = "Quitar de favoritos";
            quit.classList.add("fav");
            quit.addEventListener("click", function () {
              favs.splice(favs.indexOf(element));
              quit.parentNode.replaceChild(fav, quit);
            });

            let fav = document.createElement("button");
            fav.textContent = "Añadir a favoritos";
            fav.classList.add("fav");
            fav.addEventListener("click", function () {
              favs.push(element);
              fav.parentNode.replaceChild(quit, fav);
            });
            cont1.appendChild(fav);

            let cont2 = document.createElement("div");
            cont2.classList.add("cont2");

            let tit_desc = document.createElement("p");
            tit_desc.textContent = "Descripción del producto";
            tit_desc.classList.add("titDesc");
            cont2.appendChild(tit_desc);

            let description = document.createElement("p");
            description.textContent = element.description;
            description.classList.add("description");
            cont2.appendChild(description);

            cont.appendChild(cont1);
            detalle.appendChild(cont);
            detalle.appendChild(cont2);

            new_tbody.appendChild(detalle);
            tableBody.parentNode.replaceChild(new_tbody, tableBody);
            tableBody = new_tbody;
          });

          let div1 = document.createElement("td");
          div1.classList.add("centro");

          let price = document.createElement("p");
          price.textContent = "$ " + parsePrice(element.price.amount);
          price.classList.add("price");
          div1.appendChild(price);

          let nombre = document.createElement("p");
          nombre.textContent = element.title;
          nombre.classList.add("title");
          div1.appendChild(nombre);

          let div2 = document.createElement("td");
          div2.classList.add("final");

          let location = document.createElement("p");
          location.classList.add("location");
          location.textContent = element.location;
          div2.appendChild(location);

          row.appendChild(img);
          row.appendChild(div1);
          row.appendChild(div2);

          new_tbody.appendChild(row);
          contador++;
        }
      });
      if (contador == 0) {
        let row = document.createElement("tr");
        row.classList.add("fila");
        let aviso = document.createElement("p");
        aviso.textContent = "No hay productos de esta categoria.";
        row.appendChild(aviso);
        new_tbody.appendChild(row);
      }
      tableBody.parentNode.replaceChild(new_tbody, tableBody);
      tableBody = new_tbody;
    });
    corazon.addEventListener("click", function () {
      let new_tbody2 = document.createElement("tbody");
      favs.forEach((element) => {
        let row = document.createElement("tr");
        row.classList.add("fila");

        let img = document.createElement("img");
        img.src = element.picture;
        img.classList.add("imagen");

        let div1 = document.createElement("td");
        div1.classList.add("centro");

        let price = document.createElement("p");
        price.textContent = "$ " + parsePrice(element.price.amount);
        price.classList.add("price");
        div1.appendChild(price);

        let nombre = document.createElement("p");
        nombre.textContent = element.title;
        nombre.classList.add("title");
        div1.appendChild(nombre);

        let div2 = document.createElement("td");
        div2.classList.add("final");

        let location = document.createElement("button");
        location.classList.add("verArt");
        location.textContent = "Ver articulo";
        location.addEventListener("click", function () {
          let new_tbody = document.createElement("tbody");
          let detalle = document.createElement("tr");
          detalle.classList.add("detalle");

          let cont = document.createElement("div");
          cont.classList.add("cont");

          let img1 = document.createElement("img");
          img1.src = element.picture;
          img1.classList.add("imagen1");
          cont.appendChild(img1);

          let cont1 = document.createElement("div");
          cont1.classList.add("cont1");

          let cant = document.createElement("p");
          cant.textContent =
            element.condition + " | " + element.sold_quantity + " vendidos";
          cant.classList.add("cant");
          cont1.appendChild(cant);

          let title = document.createElement("p");
          title.textContent = element.title;
          title.classList.add("title2");
          cont1.appendChild(title);

          let price1 = document.createElement("p");
          price1.textContent = "$ " + parsePrice(element.price.amount);
          price1.classList.add("price1");
          cont1.appendChild(price1);

          let comprar = document.createElement("button");
          comprar.textContent = "Comprar";
          comprar.classList.add("comprar");
          comprar.addEventListener("click", function () {
            modal.style.display = "block";
          });
          cont1.appendChild(comprar);

          let quit = document.createElement("button");
          quit.textContent = "Quitar de favoritos";
          quit.classList.add("fav");
          quit.addEventListener("click", function () {
            favs.splice(favs.indexOf(element));
            quit.parentNode.replaceChild(fav, quit);
          });

          let fav = document.createElement("button");
          fav.textContent = "Añadir a favoritos";
          fav.classList.add("fav");
          fav.addEventListener("click", function () {
            favs.push(element);
            fav.parentNode.replaceChild(quit, fav);
          });
          cont1.appendChild(fav);

          let cont2 = document.createElement("div");
          cont2.classList.add("cont2");

          let tit_desc = document.createElement("p");
          tit_desc.textContent = "Descripción del producto";
          tit_desc.classList.add("titDesc");
          cont2.appendChild(tit_desc);

          let description = document.createElement("p");
          description.textContent = element.description;
          description.classList.add("description");
          cont2.appendChild(description);

          cont.appendChild(cont1);
          detalle.appendChild(cont);
          detalle.appendChild(cont2);

          new_tbody.appendChild(detalle);
          tableBody.parentNode.replaceChild(new_tbody, tableBody);
          tableBody = new_tbody;
        });
        div2.appendChild(location);

        row.appendChild(img);
        row.appendChild(div1);
        row.appendChild(div2);

        new_tbody2.appendChild(row);
      });
      tableBody.parentNode.replaceChild(new_tbody2, tableBody);
      tableBody = new_tbody2;
    });
  }
};

function createTable(datos) {
  datos.forEach((element) => {
    let row = document.createElement("tr");
    row.classList.add("fila");

    let img = document.createElement("img");
    img.src = element.picture;
    img.classList.add("imagen");
    img.addEventListener("click", function () {
      let new_tbody = document.createElement("tbody");

      let detalle = document.createElement("tr");
      let cats = "";
      element.categories.forEach((cat) => {
        cats = cats + cat + " > ";
      });
      let el = document.createElement("p");
      el.textContent = cats;
      el.classList.add("bread");
      detalle.appendChild(el);

      detalle.classList.add("detalle");

      let cont = document.createElement("div");
      cont.classList.add("cont");

      let img1 = document.createElement("img");
      img1.src = element.picture;
      img1.classList.add("imagen1");
      cont.appendChild(img1);

      let cont1 = document.createElement("div");
      cont1.classList.add("cont1");

      let cant = document.createElement("p");
      cant.textContent =
        element.condition + " | " + element.sold_quantity + " vendidos";
      cant.classList.add("cant");
      cont1.appendChild(cant);

      let title = document.createElement("p");
      title.textContent = element.title;
      title.classList.add("title2");
      cont1.appendChild(title);

      let price1 = document.createElement("p");
      price1.textContent = "$ " + parsePrice(element.price.amount);
      price1.classList.add("price1");
      cont1.appendChild(price1);

      let comprar = document.createElement("button");
      comprar.textContent = "Comprar";
      comprar.classList.add("comprar");
      comprar.addEventListener("click", function () {
        modal.style.display = "block";
      });
      cont1.appendChild(comprar);

      let quit = document.createElement("button");
      quit.textContent = "Quitar de favoritos";
      quit.classList.add("fav");
      quit.addEventListener("click", function () {
        favs.splice(favs.indexOf(element));
        quit.parentNode.replaceChild(fav, quit);
      });

      let fav = document.createElement("button");
      fav.textContent = "Añadir a favoritos";
      fav.classList.add("fav");
      fav.addEventListener("click", function () {
        favs.push(element);
        fav.parentNode.replaceChild(quit, fav);
      });
      cont1.appendChild(fav);

      let cont2 = document.createElement("div");
      cont2.classList.add("cont2");

      let tit_desc = document.createElement("p");
      tit_desc.textContent = "Descripción del producto";
      tit_desc.classList.add("titDesc");
      cont2.appendChild(tit_desc);

      let description = document.createElement("p");
      description.textContent = element.description;
      description.classList.add("description");
      cont2.appendChild(description);

      cont.appendChild(cont1);
      detalle.appendChild(cont);
      detalle.appendChild(cont2);

      new_tbody.appendChild(detalle);
      tableBody.parentNode.replaceChild(new_tbody, tableBody);
      tableBody = new_tbody;
    });

    let div1 = document.createElement("td");
    div1.classList.add("centro");

    let price = document.createElement("p");
    price.textContent = "$ " + parsePrice(element.price.amount);
    price.classList.add("price");
    div1.appendChild(price);

    let nombre = document.createElement("p");
    nombre.textContent = element.title;
    nombre.classList.add("title");
    div1.appendChild(nombre);

    let div2 = document.createElement("td");
    div2.classList.add("final");

    let location = document.createElement("p");
    location.classList.add("location");
    location.textContent = element.location;
    div2.appendChild(location);

    row.appendChild(img);
    row.appendChild(div1);
    row.appendChild(div2);

    tableBody.appendChild(row);
  });
}

function parsePrice(txt) {
  let text = Array.from(txt.toString()).reverse();
  let respuesta = "";
  let cont = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == ".") {
      respuesta = "," + respuesta;
      cont = 0;
    } else {
      respuesta = text[i] + respuesta;
      if ((cont + 1) % 3 == 0 && cont + 1 < text.length) {
        respuesta = "." + respuesta;
      }
      cont++;
    }
  }
  return respuesta;
}
