//Selecting table elements.
const btn = document.querySelector("#add-btn");
var tbody = document.querySelector("tbody");
const db = [
  {
    id: 0, name: "Rice", unitPrice: 100
  },
  {
    id: 1, name: "Beans", unitPrice: 110
  },
  {
    id: 2, name: "Banana", unitPrice: 90
  },
  {
    id: 3, name: "Yam", unitPrice: 200
  },
  {
    id: 4, name: "Tomatoes", unitPrice: 220
  },
  {
    id: 5, name: "Onions", unitPrice: 56
  },
  {
    id: 6, name: "Semovita", unitPrice: 1300
  },
  {
    id: 7, name: "Frozen meat", unitPrice: 1050
  },
  {
    id: 8, name: "Vegetable", unitPrice: 115
  },
  {
    id: 9, name: "Palm oil", unitPrice: 800
  },
  {
    id: 10, name: "Table salt", unitPrice: 515
  },
  {
    id: 11, name: "Ogiri", unitPrice: 20
  }
]



btn.addEventListener("click", () => {
  // selecting the indivitual cells in the row
  const productElement = document.querySelector("#product");
  // const quantity = document.querySelector("#quantity");
  // const price = document.querySelector("#unit-price");
  // const subTotal = document.querySelector("#sub-total");

  //applying clone to the template element
  const productRow = document.querySelector(".productrow");
  const clone = productRow.content.cloneNode(true);
  var td = clone.querySelectorAll("td");
  const flip = td[1].querySelector("i");
  console.log(flip);
  const addqty = td[1].querySelector(".up");
  const minusqty = td[1].querySelector(".down");
  const clickme = td[1].querySelector("p");

  console.log(clickme);
const product = db.find(element => Number.parseInt(productElement.value) === element.id);
console.log(product);
if(!product){
  alert("Product not in stock");
  return;
}
  //assigning value to the template row
  td[0].textContent = product.name;
  clickme.textContent = 1;
  td[2].textContent = product.unitPrice;
  td[3].textContent = product.unitPrice;

  //appending the product row to the product list.
  tbody.appendChild(clone);
  tbody.style.textAlign = "center";
  clickme.style.paddingLeft = "5px";
  td[0].style.textAlign = "left";
  td[0].style.paddingRight = "4px";
  total.style.textAlign = "center";
  total.style.color = "green";
  total.style.fontStyle = "italic";
  td[0].style.fontStyle = "italic";
  // console.log(product.value);

  productElement.value = "";
  // quantity.value = "";
  // price.value = "";
  // subTotal.value = "";

  minusqty.style.color = "#f00";
  addqty.style.color = "#0f0";
  addqty.addEventListener("click", () => {
    clickme.textContent++;
    td[3].textContent = clickme.textContent * td[2].textContent;
    total.textContent = td[3].textContent;
    getTotal();
  })

  minusqty.addEventListener('click', () => {
    if (clickme.textContent > 1) {
      clickme.textContent--;
      td[3].textContent = clickme.textContent * td[2].textContent;
      total.textContent = td[3].textContent;
      // if(clickme.textContent=0){tbody.remove(td.lastChild);}
      getTotal();
    }
  })

getTotal();

})


function getTotal() {
  const subTotals = tbody.querySelectorAll(".st");
  let total = 0;
  let totalElement = document.querySelector("#total");
  for(let i = 0; i < subTotals.length; i++){
    total += Number.parseInt(subTotals[i].textContent);
  }
  totalElement.textContent = total;
  // console.log(typeof addTotal);
  // var addTotalContent = td[3].textContent;

  // let subarray = [];
  // addTotal.forEach(() => {
  //   subarray.push(addTotalContent);
  // })

  // console.log(subarray);

}