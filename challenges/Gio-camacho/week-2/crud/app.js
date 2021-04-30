const formElement = document.getElementById("formulario");
const appendCards = document.getElementById("appendCards");

let containerArr = [];

// FUNCTIONS
const createItems = function (title, description, image, date) {
  let museo = {
    title,
    description,
    image,
    date,
  };
  containerArr.push(museo);
  return museo;
};

const saveOnLocalStorage = function (arr) {
  localStorage.setItem("museo", JSON.stringify(arr));
  renderLocalStorage();
};

const renderLocalStorage = function (arr) {
  appendCards.innerHTML = "";

  containerArr = JSON.parse(localStorage.getItem("museo"));

  if (containerArr === null) {
    containerArr = new Array();
  } else {
    containerArr.forEach((obj, index) => {
      appendCards.innerHTML += `            <div data-id="${index}" class="col-12 col-md-6 col-lg-4 py-3">
              <div class="card shadow-sm">
                <img
                  src="${obj.image}"
                  alt="${obj.title}"
                />
                <h2 class="p-3">${obj.title}</h2>

                <div class="card-body">
                  <p class="card-text">
                    ${obj.description}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        id="${index}"
                        name="modify"
                        type="button"
                        class="btn btn-sm btn-outline-primary"
                      >
                        MODIFICAR
                      </button>
                      <button
                        id="${index}"
                        name="delete"
                        type="button"
                        class="btn btn-sm btn-outline-danger"
                      >
                        BORRAR
                      </button>
                    </div>
                    <small class="text-muted">${obj.date}</small>
                  </div>
                </div>
              </div>
            </div>
`;
    });
  }
};

const deleteCard = function (btnEvent) {
  if (btnEvent === "delete") {
    console.log("borrar");
  }
  if (btnEvent === "modify") {
    console.log("modificar");
  }
};

// EVENT LISTENER
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let titleId = document.getElementById("exampleInputName").value;
  let descriptionId = document.getElementById("exampleInputDescription").value;
  let imageId = document.getElementById("exampleInputImage").value;
  let dateId = document.getElementById("exampleInputDate").value;

  createItems(titleId, descriptionId, imageId, dateId);
  saveOnLocalStorage(containerArr);
  formElement.reset();
});

document.getElementById("DOMContentLoad", renderLocalStorage());

appendCards.addEventListener("click", (event) => {
  event.preventDefault();
  let idToDelete = event.target.id;
  containerArr.splice(idToDelete, 1);
  console.log(containerArr);
  saveOnLocalStorage(containerArr);
  renderLocalStorage(containerArr);
});
