const yearEl = document.getElementById("year");
const greetingEl = document.getElementById("greeting");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const html = document.documentElement;
const progressBar = document.getElementById("progressBar");
const scrollTopBtn = document.getElementById("scrollTopBtn");

const visitorNameInput = document.getElementById("visitorName");
const saveNameBtn = document.getElementById("saveNameBtn");
const clearNameBtn = document.getElementById("clearNameBtn");
const personalGreeting = document.getElementById("personalGreeting");

const counters = document.querySelectorAll(".counter");
const revealSections = document.querySelectorAll(".section");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const projectSearch = document.getElementById("projectSearch");
const emptyMessage = document.getElementById("emptyMessage");
const favoriteMessage = document.getElementById("favoriteMessage");
const favoriteButtons = document.querySelectorAll(".favorite-btn");
const resultsCount = document.getElementById("resultsCount");

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalIcon = document.getElementById("modalIcon");

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const messageInput = document.getElementById("message");
const messageCounter = document.getElementById("messageCounter");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

let activeFilter = "all";
let countersStarted = false;
let lastFocusedButton = null;

/* helpers */
function sanitizeText(value) {
    return value.trim().replace(/[<>]/g, "");
}

function setText(el, text) {
    if (el) el.textContent = text;
}

function clearFieldError(inputEl, errorEl) {
    inputEl.classList.remove("input-error");
    errorEl.textContent = "";
}

function showFieldError(inputEl, errorEl, message) {
    inputEl.classList.add("input-error");
    errorEl.textContent = message;
}

/* footer year */
yearEl.textContent = new Date().getFullYear();

/* greeting */
function updateGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingEl.textContent = "Good Morning ☀️";
    } else if (hour < 18) {
        greetingEl.textContent = "Good Afternoon 👋";
    } else {
        greetingEl.textContent = "Good Evening 🌙";
    }
}
updateGreeting();

/* theme */
const themeIcon = themeToggle.querySelector("i");

function updateThemeIcon(theme) {
    themeIcon.classList.remove("fa-moon", "fa-sun");
    if (theme === "dark") {
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.add("fa-moon");
    }
}

const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
});

/* mobile nav */
function closeMobileMenu() {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");

    const icon = menuToggle.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
}

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isOpen = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    const icon = menuToggle.querySelector("i");
    if (isOpen) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        closeMobileMenu();
    });
});

document.addEventListener("click", (e) => {
    const clickedInsideMenu = navMenu.contains(e.target);
    const clickedMenuButton = menuToggle.contains(e.target);

    if (!clickedInsideMenu && !clickedMenuButton && navMenu.classList.contains("active")) {
        closeMobileMenu();
    }
});

/* smooth anchor scroll */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

/* active nav on scroll */
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
    let currentSectionId = "";

    sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
}

/* scroll progress + scroll top button */
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;

    if (scrollTop > 300) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }
}

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* personalized greeting */
function renderSavedName() {
    const savedName = localStorage.getItem("visitorName");

    if (savedName) {
        personalGreeting.textContent = `Welcome back, ${savedName}!`;
    } else {
        personalGreeting.textContent = "Save your name to personalize this portfolio.";
    }
}

renderSavedName();

function saveVisitorName() {
    const nameValue = sanitizeText(visitorNameInput.value);

    if (!nameValue) {
        personalGreeting.textContent = "Please enter your name before saving.";
        return;
    }

    localStorage.setItem("visitorName", nameValue);
    personalGreeting.textContent = `Welcome back, ${nameValue}!`;
    visitorNameInput.value = "";
}

saveNameBtn.addEventListener("click", saveVisitorName);

visitorNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        saveVisitorName();
    }
});

clearNameBtn.addEventListener("click", () => {
    localStorage.removeItem("visitorName");
    visitorNameInput.value = "";
    renderSavedName();
});

/* counter animation */
function startCounters() {
    if (countersStarted) return;
    countersStarted = true;

    counters.forEach((counter) => {
        const target = Number(counter.dataset.target);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 30));

        const interval = setInterval(() => {
            current += step;

            if (current >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = current;
            }
        }, 40);
    });
}

/* reveal on scroll */
revealSections.forEach((section) => section.classList.add("reveal"));

function revealOnScroll() {
    revealSections.forEach((section, index) => {
        const top = section.getBoundingClientRect().top;
        const visiblePoint = window.innerHeight - 110;

        if (top < visiblePoint) {
            section.classList.add("visible");

            if (index === 0) {
                startCounters();
            }
        }
    });
}

/* projects filter + search */
function updateProjects() {
    const searchValue = projectSearch.value.toLowerCase().trim();
    let visibleCount = 0;

    projectCards.forEach((card) => {
        const category = card.dataset.category;
        const title = card.dataset.title.toLowerCase();
        const keywords = card.dataset.keywords.toLowerCase();

        const matchesFilter = activeFilter === "all" || category === activeFilter;
        const matchesSearch = title.includes(searchValue) || keywords.includes(searchValue);

        if (matchesFilter && matchesSearch) {
            card.classList.remove("hidden");
            visibleCount++;
        } else {
            card.classList.add("hidden");
        }
    });

    resultsCount.textContent = `${visibleCount} project(s) shown.`;

    emptyMessage.textContent =
        visibleCount === 0
            ? "No projects found. Try another keyword or category."
            : "";
}

filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
        activeFilter = this.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        updateProjects();
    });
});

projectSearch.addEventListener("input", updateProjects);

/* favorite project */
function renderFavoriteState() {
    const savedFavorite = localStorage.getItem("favoriteProject");

    favoriteButtons.forEach((button) => {
        const card = button.closest(".project-card");
        const projectName = card.dataset.project;
        const icon = button.querySelector("i");

        if (savedFavorite === projectName) {
            button.classList.add("saved");
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
        } else {
            button.classList.remove("saved");
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
        }
    });

    if (savedFavorite) {
        favoriteMessage.textContent = `Favorite project saved: ${savedFavorite}`;
    } else {
        favoriteMessage.textContent = "You have not selected a favorite project yet.";
    }
}

favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const card = this.closest(".project-card");
        const projectName = card.dataset.project;
        const currentFavorite = localStorage.getItem("favoriteProject");

        if (currentFavorite === projectName) {
            localStorage.removeItem("favoriteProject");
        } else {
            localStorage.setItem("favoriteProject", projectName);
        }

        renderFavoriteState();
    });
});

/* modal */
document.querySelectorAll(".open-modal-btn").forEach((button) => {
    button.addEventListener("click", function () {
        lastFocusedButton = this;

        const card = this.closest(".project-card");
        const title = card.dataset.project;
        const description = card.dataset.description;
        const iconHTML = card.querySelector(".project-icon").innerHTML;

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalIcon.innerHTML = iconHTML;

        modalOverlay.classList.add("active");
        modalOverlay.setAttribute("aria-hidden", "false");
        modalClose.focus();
    });
});

function closeModal() {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");

    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
}

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
        closeModal();
    }
});

/* tabs */
tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const selectedTab = this.dataset.tab;

        tabButtons.forEach((btn) => {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
        });

        tabContents.forEach((content) => content.classList.remove("active"));

        this.classList.add("active");
        this.setAttribute("aria-selected", "true");
        document.getElementById(selectedTab).classList.add("active");
    });
});

/* contact form */
function updateMessageCounter() {
    const currentLength = messageInput.value.length;
    messageCounter.textContent = `${currentLength} / 300`;
}

updateMessageCounter();

messageInput.addEventListener("input", updateMessageCounter);

[nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => {
        if (input === nameInput) clearFieldError(nameInput, nameError);
        if (input === emailInput) clearFieldError(emailInput, emailError);
        if (input === messageInput) clearFieldError(messageInput, messageError);
        formMessage.textContent = "";
    });
});

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = sanitizeText(nameInput.value);
    const email = emailInput.value.trim();
    const message = sanitizeText(messageInput.value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    clearFieldError(nameInput, nameError);
    clearFieldError(emailInput, emailError);
    clearFieldError(messageInput, messageError);
    formMessage.textContent = "";

    if (!name) {
        showFieldError(nameInput, nameError, "Please enter your name.");
        isValid = false;
    } else if (name.length < 2) {
        showFieldError(nameInput, nameError, "Name must be at least 2 characters.");
        isValid = false;
    }

    if (!email) {
        showFieldError(emailInput, emailError, "Please enter your email.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showFieldError(emailInput, emailError, "Please enter a valid email address.");
        isValid = false;
    }

    if (!message) {
        showFieldError(messageInput, messageError, "Please enter your message.");
        isValid = false;
    } else if (message.length < 10) {
        showFieldError(messageInput, messageError, "Message must be at least 10 characters.");
        isValid = false;
    }

    if (!isValid) {
        formMessage.textContent = "❌ Please fix the highlighted fields.";
        formMessage.style.color = "var(--error)";
        return;
    }

    formMessage.textContent = "✅ Thank you! Your message has been received.";
    formMessage.style.color = "var(--success)";

    contactForm.reset();
    updateMessageCounter();

    setTimeout(() => {
        formMessage.textContent = "";
    }, 4500);
});

/* scroll events */
function handleScroll() {
    updateScrollProgress();
    revealOnScroll();
    updateActiveNav();
}

window.addEventListener("scroll", handleScroll);

/* initial calls */
updateProjects();
renderFavoriteState();
handleScroll();