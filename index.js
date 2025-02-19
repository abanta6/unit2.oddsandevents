const bank = [];
const odds = [];
const evens = [];
function addNumberToBank(n) {
  bank.push(n);
  render();
}

function moveNumberFromBank() {
  if (bank.length === 0) return;

  const n = bank.shift();
  if (n % 2 === 0) {
    evens.push(n);
  } else {
    odds.push(n);
  }
  render();
}

function NumberForm() {
  const $form = document.createElement("form");

  $form.innerHMTL = `
    <lable>
         Add a number to the bank
        <input name="number" type"number" />
        </label>
        <button id="Add">Add number</button>
        <button id="sort1">Sort 1</button>
        <button id="sort all">Sort All</button>
    `;

  const $add = $form.querySelector("add");
  $add.addEventListener("click", () => {
    const data = new FormData($form);
    const number = data.get("number");
    addNumberToBank(Number(number));
  });

  const $sort1 = $form.querySelector("sort1");
  $add.addEventListener("click", () => {
    moveNumberFromBank();
  });

  const $sortAll = $form.querySelector("#sortAll");
  $sortAll.addEventListener("click", () => {
    while (bank.length > 0) {
      moveNumberFromBank();
    }
  });

  return $form;
}
function NumberList(title, numbers) {
  const $section = document.createElement("section");

  $section.innerHTML = `
        <h2>${title}</h2>
        <p>${NumberList.join(",")}</p>
    `;

  return $section;
}

function render() {
  const $app = document.querySelector("app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <NumberForm></NumberForm>
    <Numberlist id="bank"></Numberlist>
    <Numberlist id="odds"></Numberlist>
    <Numberlist id="evens"></Numberlist> `;
  $app.querySelector("NumberForm").replaceWith(NumberForm());
  $app.querySelector("NumberList#bank").replaceWith(NumberList("Bank", bank));
  $app.querySelector("NumberList#odds").replaceWith(NumberList("Odds", odds));
  $app
    .querySelector("NumberList#evens")
    .replaceWith(NumberList("Evens", evens));
}

render();
