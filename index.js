//Selecting table elements.
const btn = document.querySelector("#add-btn");
const tbody = document.querySelector("tbody");
const total = document.querySelector("total");

btn.addEventListener("click", ()=>{
  // selecting the indivitual cells in the row
  const product = document.querySelector("#product");
  const quantity = document.querySelector("#quantity");
  const price = document.querySelector("#unit-price");
  const subTotal = document.querySelector("#sub-total");
  
  //applying clone to the template element
  const productRow = document.querySelector("#productrow");
  const clone = productRow.content.cloneNode(true);
  const td = clone.querySelectorAll("td");
  const flip = td[1].querySelector("i");
  console.log(flip);
  const addqty = td[1].querySelector(".up");
  const minusqty = td[1].querySelector(".down");
  const clickme = td[1].querySelector("p");

  minusqty.style.color="#f00";
  addqty.style.color="#0f0";
  addqty.addEventListener("click",()=>{
    clickme.textContent++;
    td[3].textContent = clickme.textContent*td[2].textContent;
  })
  minusqty.addEventListener('click', ()=>{
  if(clickme.textContent!=0){
    clickme.textContent--;
    td[3].textContent = clickme.textContent*td[2].textContent;
    // if(clickme.textContent=0){tbody.remove(td.lastChild);}
  }
})

  console.log(clickme);
  //assigning value to the template row
  td[0].textContent = product.value;
  flip.textContent= quantity.value;
  td[2].textContent = price.value;
  td[3].textContent = price.value;

  //appending the product row to the product list.
  tbody.appendChild(clone);
  console.log(product.value);
  product.value="";
  quantity.value="";
  price.value="";
  subTotal.value="";
})

