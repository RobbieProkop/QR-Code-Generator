const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  const https = "https://";

  !url ? alert("Please Enter a URL") : showSpinner(),
    setTimeout(() => {
      hideSpinner();
      if (!url.includes("http://" || "https://")) {
        const newUrl = https.concat(url);
        console.log(newUrl);
        generateQRCode(newUrl, size);
      } else {
        generateQRCode(url, size);
      }
    }, 1000);
};

const generateQRCode = (url, size) => {
  console.log("called");
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

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
