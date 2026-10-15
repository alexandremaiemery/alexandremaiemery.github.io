(function () {
    const toggle = document.querySelector(".theme-toggle");

    if (!toggle) {
        return;
    }

    const root = document.documentElement;
    const systemQuery = window.matchMedia("(prefers-color-scheme: light)");

    function readStoredTheme() {
        try {
            const stored = localStorage.getItem("theme");
            return stored === "light" || stored === "dark" ? stored : null;
        } catch {
            return null;
        }
    }

    let hasChoice = readStoredTheme() !== null;

    function currentTheme() {
        return root.dataset.theme === "light" ? "light" : "dark";
    }

    function updateLabel() {
        toggle.setAttribute(
            "aria-label",
            currentTheme() === "dark" ? "Passer au thème clair" : "Passer au thème sombre"
        );
    }

    toggle.addEventListener("click", function () {
        const next = currentTheme() === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        hasChoice = true;

        try {
            localStorage.setItem("theme", next);
        } catch {
        }

        updateLabel();
    });

    systemQuery.addEventListener("change", function (event) {
        if (hasChoice) {
            return;
        }

        root.dataset.theme = event.matches ? "light" : "dark";
        updateLabel();
    });

    updateLabel();
    toggle.hidden = false;
})();