const form = document.querySelector("form");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));


form.addEventListener("submit", function(e) {
  e.preventDefault();
  let type = document.getElementById("type").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;
  let value = document.getElementById("value").value;
  var newObject = { type: type, description: description, value: value, category: category };
  itemsArray.push(newObject);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  var frm = document.getElementsByName("form-add")[0];
  frm.submit();
  frm.reset();
  return false;
});

