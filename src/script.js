const form = document.getElementById("generate-form");
const gr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  !url ? alert("Please Enter a URL") : showSpinner(),
    setTimeout(() => {
      hideSpinner();
    }, 1000);
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
