function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// Function to extract domain from URL
function getProviderIcon(url) {
    if (url.includes("coursera.org")) {
      return "./assets/logos/coursera.png";
    } else if (url.includes("udemy.com")) {
      return "./assets/logos/udemy-icon.png";
    } else if (url.includes("freecodecamp.org")) {
      return "./assets/logos/freecodecamp.png";
    } else if (url.includes("edx.org")) {
      return "https://upload.wikimedia.org/wikipedia/commons/4/4a/EdX_logo.svg";
    } else {
      return "https://static.vecteezy.com/system/resources/previews/011/318/779/original/certificate-icon-logo-design-png.png"; // Default icon if provider is unknown
    }
  }
  
  // Set icons dynamically
  document.querySelectorAll(".achievements-item").forEach((item) => {
    const url = item.getAttribute("data-url");
    const icon = item.querySelector(".certificate-icon");
    icon.src = getProviderIcon(url);
  });
  
  // Modal functionality
  const modal = document.getElementById("certificate-modal");
  const modalContent = document.getElementById("certificate-link");
  const modalProvider = document.getElementById("certificate-provider");
  const modalTitle = document.getElementById("modal-title");
  
  document.querySelectorAll(".view-certificate").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.closest(".achievements-item");
      const provider = parent.querySelector(".certificate-provider").innerText;
      const url = parent.getAttribute("data-url");
      const title = parent.querySelector(".certificate-title").innerText;
  
      modalProvider.innerText = `Issued by: ${provider}`;
      modalTitle.innerText = title;
      modalContent.href = url;
      modal.style.display = "block";
    });
  });
  
  // Close modal
  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  // Close when clicking outside modal
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
  



