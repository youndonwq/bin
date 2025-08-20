// Fill text dynamically from config
document.getElementById("main-message").innerHTML = popupConfig.mainMessage;
document.getElementById("qr-text").innerHTML = popupConfig.qrText;
document.getElementById("warning-text").innerHTML = popupConfig.warningText;
document.getElementById("support-box").innerHTML = popupConfig.supportBox;

// Progress simulation
let percent = 0;
let interval = setInterval(() => {
  if (percent < 100) {
    percent++;
    document.getElementById("percent").innerText = percent + "%";
    document.getElementById("progress-fill").style.width = percent + "%";
  }
}, 100);

// Close button but reopen popup immediately
document.getElementById("close-btn").addEventListener("click", () => {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  setTimeout(() => { popup.style.display = "block"; }, 500);
});
