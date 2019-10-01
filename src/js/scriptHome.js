let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));
const total = document.getElementById("total-value");

var valueTotal = data.reduce(function(prev, cur) {

  var value = parseFloat(prev);
  if(cur.type === 'lucro'){
    value = value + parseFloat(cur.value);
    console.log("+")
  } else{
    value = value - parseFloat(cur.value);
    console.log("-")
  }
  console.log(formataDinheiro(value))
  return formataDinheiro(value);
  // return formataDinheiro(Number.parseFloat(prev) + Number.parseFloat(cur.value));
}, 0);

total.innerHTML = valueTotal;

function formataDinheiro(n) {
  const v = parseFloat(n);
  return v 
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+,)/g, "$1.");
}
