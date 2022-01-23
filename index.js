const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  var el = document.getElementById("o")
  el.remove();

  // y añade contenido
  var newDiv = document.createElement("li");
  console.log(Object.values(cosasQueAprendimos)[1].tema)
  var newContent = document.createTextNode(cosasQueAprendimos.keys);
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);


}

main();
