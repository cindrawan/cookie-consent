let acceptButton = document.getElementById("accept-cookie")
popup = document.getElementById("cookie-popup")
closeButton = document.getElementById('close-button')

const isCookieAccepted = localStorage.getItem("cookieConsent")

if (isCookieAccepted) {
    popup.style.display = "none"
}

acceptButton.addEventListener("click", () => {
    popup.style.display = "none"
    localStorage.setItem("cookieConsent", true)
})

closeButton.addEventListener("click", () => {
    popup.style.display = "none"
})