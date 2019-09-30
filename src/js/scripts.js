const form = document.querySelector("form");
const button = document.querySelector("button");
const tables = document.querySelector("table");
let itemsArray = localStorage.getItem("items") ?
  JSON.parse(localStorage.getItem("items")) : [];

const listTable = document.getElementById("table-all");

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const getIconCategory = type => {
  var icon = '';
  if (type === 'alimentacao') {
    icon = './src/images/icons/svg/alimentacao.svg';
  } else if (type === 'diversao') {
    icon = './src/images/icons/svg/diversao.svg';
  } else if (type === 'estudos') {
    icon = './src/images/icons/svg/estudos.svg';
  } else if (type === 'moradia') {
    icon = './src/images/icons/svg/moradia.svg';
  } else if (type === 'saude') {
    icon = './src/images/icons/svg/saude.svg';
  } else if (type === 'transporte') {
    icon = './src/images/icons/svg/transporte.svg';
  } else if (type === 'vestuario') {
    icon = './src/images/icons/svg/vestuario.svg';
  } else if (type === 'viagem') {
    icon = './src/images/icons/svg/viagem.svg';
  } else {
    icon = './src/images/icons/svg/minus-circle.svg';
  }
  return icon;
}

const liMaker = text => {
  console.log(getIconCategory(text.category))
  listTable.innerHTML +=
    "<tr><td><div class='category-table'><svg id='circle' height='20' width='20' xmlns='http://www.w3.org/2000/svg'xmlns:xlink='http://www.w3.org/1999/xlink'><image x='0' y='0' height='20' width='20' xlink:href='" +
    getIconCategory(text.category) +
    "'/></svg></div><td>" +
    text.type +
    "</td><td>" +
    text.value +
    "</td><td>" +
    text.description +
    "</td></tr>";
};

data.forEach(item => {
  liMaker(item);
});

button.addEventListener("click", function () {
  localStorage.clear();
  while (tables.firstChild) {
    tables.removeChild(tables.firstChild);
  }
  itemsArray = [];
});

//Caso não tenham lançamentos realizados
if (listTable.rows.length <= 1) {
  button.style.display = 'none';
  form.innerHTML = '<div><h5 style="color: #b3b3b3;font-weight: normal;">Você ainda não tem lançamentos registrados :/ <h5> <a class="button" href="./addNew.html" style="background: #138086;border: none;">Comece agora!</div>';
}

