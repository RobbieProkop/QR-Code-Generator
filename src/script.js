const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  const https = "https://";

  if (!url) {
    return alert("Please Enter a URL");
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      if (!url.includes("http://" || "https://")) {
        const newUrl = https.concat(url);
        generateQRCode(newUrl, size);
      } else {
        generateQRCode(url, size);
      }

      setTimeout(() => {
        const saveUrl = qr.querySelector("img").src;
        createSaveBtn(saveUrl);
      }, 50);
    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

const clearUI = () => {
  qr.innerHTML = "";
  const saveBtn = document.getElementById("save");
  if (saveBtn) saveBtn.remove();
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");

  link.id = "save";
  link.classList =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded m-auto my-5 w-1/3";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  document.getElementById("generated").appendChild(link);
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
