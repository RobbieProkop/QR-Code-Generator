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
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
