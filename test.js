fetch("products.json")
  .then(function (responce) {
    return responce.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let product of products) {
      out += `
      <tr>
        <td>${product.id}</td>
        <td>${product.Location}</td>
        <td>${product.Name}</td>
        <td><img src='${product.Image}'style="max-width: 200px;"></td>

      </tr>
    `;
    }
    placeholder.innerHTML=out;
  });
