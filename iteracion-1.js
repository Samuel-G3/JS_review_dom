// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
//todo--------creo nuevo elemento 'ul'
const newUl$$ = document.createElement("ul");
//todo--------creo for of: recorro countries y los almaceno en counetry$$
for (const country$$ of countries) {
  //todo--------creo el elemento 'li'
  const newli$$ = document.createElement("li");
  //todo-------añado a 'li' el texto de country, previamente almacendo
  newli$$.textContent = country$$;
  //todo--------inyecto 'li' a 'ul'
  newUl$$.appendChild(newli$$);
}
//todo-------inyecto 'ul' al body papi!
document.body.appendChild(newUl$$);
console.log(countries);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
//todo-------llamo al elemento que quiero deletear y con la funcion .remove()
const deleteFn$$ = document.querySelector(".fn-remove-me");
deleteFn$$.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const newArray$$ = document.createElement("ul");
const insertArrayInDiv$$ = document.querySelector(
  '[data-function="printHere"]'
);
for (const car of cars) {
  const newli$$ = document.createElement("li");
  newli$$.textContent = car;
  newArray$$.appendChild(newli$$);
}

insertArrayInDiv$$.appendChild(newArray$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

// //todo     creo for of, meto la array en country2$$, creo el DIV y h4 img
for (const country2$$ of countries2) {
  const newDiv2$$ = document.createElement("div");

//   //todo      innerHTML va comillas francesas `` y para invocar elementos del array
//   //todo      uso ${}
  newDiv2$$.innerHTML = `<h4>${country2$$.title}</h4><img src=${country2$$.imgUrl}/>`;
  document.body.appendChild(newDiv2$$);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.
//todo    creo boton, lo meto al body, le doy texto
const deleteBtn$$ = document.createElement("button");
document.body.appendChild(deleteBtn$$);
deleteBtn$$.textContent = "Lo borro toooó!!";
//todo    le doy evento al botón
deleteBtn$$.addEventListener("click", () => {
  const newDiv2$$ = document.body.querySelectorAll("div");
  //todo    del nuevo div elimino el último
  newDiv2$$[newDiv2$$.length - 1].remove();
});

 
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.
//*    DESCOMENTAR PARA QUE FUNCIONE exercise.1.6
//*    se solapa con el anterior  
//* desde aquí *______________________
// const countries2 = [
//   { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
//   { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
//   { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
//   { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
//   { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
// ];

// //todo     creo for of, meto la array en country2$$, creo el DIV y h4 img
// for (const country2$$ of countries2) {
//   const newDiv2$$ = document.createElement("div");

//   //todo      innerHTML va comillas francesas `` y para invocar elementos del array
//   //todo      uso ${}
//   newDiv2$$.innerHTML = `<h4>${country2$$.title}</h4><img src=${country2$$.imgUrl}/>`;

//   const btnForEachImg$$ = document.createElement("boton2");
//   btnForEachImg$$.textContent = "lo borro de uno en uno!";
//   newDiv2$$.appendChild(btnForEachImg$$);
//   btnForEachImg$$.addEventListener("click", () => {
//     newDiv2$$.remove();
//   });

//   document.body.appendChild(newDiv2$$);
// }
//* hasta aquí *__________________________