// Function to get the certificate provider logo dynamically
function getProviderIcon(url) {
    if (url.includes("coursera.org")) {
      return "https://upload.wikimedia.org/wikipedia/commons/9/94/Coursera-Logo.png";
    } else if (url.includes("udemy.com")) {
      return "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg";
    } else if (url.includes("edx.org")) {
      return "https://upload.wikimedia.org/wikipedia/commons/4/4a/EdX_logo.svg";
    } else {
      return "default-certificate.png";
    }
  }
  
  // Function to extract the credential ID from the URL
  function getCredentialID(url) {
    const match = url.match(/(\d+)$/); // Extracts last number in the URL as credential ID
    return match ? match[0] : "N/A";
  }
  
  // Set icons dynamically
  document.querySelectorAll(".achievements-item").forEach((item) => {
    const url = item.getAttribute("data-url");
    const icon = item.querySelector(".certificate-icon");
    icon.src = getProviderIcon(url);
  });
  
  // Modal functionality
  const modal = document.getElementById("certificate-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalProvider = document.getElementById("modal-provider");
  const modalID = document.getElementById("modal-id");
  const modalLink = document.getElementById("modal-link");
  
  document.querySelectorAll(".view-certificate").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.closest(".achievements-item");
      const provider = parent.querySelector(".certificate-provider").innerText;
      const title = parent.querySelector(".certificate-title").innerText;
      const url = parent.getAttribute("data-url");
      const credentialID = getCredentialID(url);
  
      modalTitle.innerText = title;
      modalProvider.innerText = provider;
      modalID.innerText = credentialID;
      modalLink.href = url;
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
//   function toggleDetails() {
//     var details = document.getElementById("project-details");
//     var button = document.getElementById("toggle-btn");

//     if (details.style.display === "none" || details.style.display === "") {
//         details.style.display = "block";
//         button.textContent = "Hide Details";
//     } else {
//         details.style.display = "none";
//         button.textContent = "Show Details";
//     }
// }
function showDetails() {
  document.getElementById("project-details").style.display = "block";
}

function hideDetails() {
  document.getElementById("project-details").style.display = "none";
}

function toggleDetails() {
  var details = document.getElementById("project-details");
  details.style.display = (details.style.display === "none" || details.style.display === "") ? "block" : "none";
}