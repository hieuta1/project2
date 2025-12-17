fetch("http://localhost:10000/api/laptops")
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById("laptop-list");

    data.forEach(l => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${l.name}</td>
        <td>${l.cpu}</td>
        <td>${l.ram}</td>
        <td>${l.storage}</td>
        <td>${l.price.toLocaleString()} ₫</td>
      `;
      tbody.appendChild(tr);
    });
  });
