const whatsappNumber = "573204005807";
const messageNode = document.getElementById("waText");
const copyButton = document.getElementById("copyMessage");
const waLink = document.getElementById("waLink");

function currentMessage() {
  return messageNode.textContent.trim();
}

function updateWhatsappLink() {
  waLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(currentMessage())}`;
}

copyButton.addEventListener("click", async () => {
  const message = currentMessage();
  try {
    await navigator.clipboard.writeText(message);
    copyButton.textContent = "Mensaje copiado";
    setTimeout(() => {
      copyButton.textContent = "Copiar mensaje";
    }, 1800);
  } catch (error) {
    copyButton.textContent = "Copia manual";
    messageNode.focus?.();
  }
});

updateWhatsappLink();
