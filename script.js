const WHATSAPP_NUMBER = "919948158323";
let currentLang = "en";
const langToggle = document.getElementById("langToggle");
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en][data-te]").forEach((el) => {
    const value = el.dataset[lang];
    if (value !== undefined) el.innerHTML = value;
  });
  langToggle.textContent = lang === "en" ? "తెలుగు" : "English";
  document.title = lang === "en"
    ? "Bhavani Solar Energy | Rooftop Solar in East Godavari"
    : "భవానీ సోలార్ ఎనర్జీ | తూర్పు గోదావరిలో రూఫ్‌టాప్ సోలార్";
}
langToggle.addEventListener("click", () => setLanguage(currentLang === "en" ? "te" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open") ? "true" : "false");
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
document.getElementById("leadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const location = document.getElementById("location").value.trim();
  const type = document.getElementById("projectType").value;
  const bill = document.getElementById("bill").value;
  const notes = document.getElementById("notes").value.trim();
  const en = currentLang === "en";
  const message = [
    en ? "Hello Bhavani Solar Energy, I would like a solar consultation." : "నమస్కారం భవానీ సోలార్ ఎనర్జీ, నాకు సోలార్ సలహా కావాలి.",
    `${en ? "Name" : "పేరు"}: ${name}`,
    `${en ? "Mobile" : "మొబైల్"}: ${phone}`,
    `${en ? "Village/Town" : "గ్రామం/పట్టణం"}: ${location}`,
    `${en ? "Project type" : "ప్రాజెక్ట్ రకం"}: ${type}`,
    `${en ? "Monthly bill range" : "నెలవారీ బిల్లు"}: ${bill}`,
    notes ? `${en ? "Notes" : "వివరాలు"}: ${notes}` : "",
    en ? "Please contact me about the next steps." : "తదుపరి వివరాల కోసం దయచేసి నన్ను సంప్రదించండి."
  ].filter(Boolean).join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
