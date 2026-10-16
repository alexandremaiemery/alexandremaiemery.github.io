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

(function () {
    const entries = Array.from(document.querySelectorAll('nav a[href^="#"]'))
        .map(function (link) {
            const section = document.querySelector(link.getAttribute("href"));
            return section ? { link: link, section: section } : null;
        })
        .filter(function (entry) {
            return entry !== null;
        });

    if (entries.length === 0) {
        return;
    }

    const referenceLine = 128;
    const scrollKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
    let activeLink = null;
    let lockedLink = null;
    let updateQueued = false;

    function currentReferenceLine() {
        const viewportHeight = window.innerHeight;
        const maxScroll = document.documentElement.scrollHeight - viewportHeight;
        const zone = Math.min(viewportHeight - referenceLine, maxScroll);

        if (zone <= 0) {
            return referenceLine;
        }

        const remaining = maxScroll - window.scrollY;
        const progress = Math.min(1, Math.max(0, 1 - remaining / zone));

        return referenceLine + (viewportHeight - referenceLine) * progress;
    }

    function findActiveEntry() {
        const line = currentReferenceLine();
        let found = null;

        entries.forEach(function (entry) {
            if (entry.section.getBoundingClientRect().top <= line) {
                found = entry;
            }
        });

        return found;
    }

    function updateActiveLink() {
        updateQueued = false;

        let nextLink = lockedLink;

        if (nextLink === null) {
            const entry = findActiveEntry();
            nextLink = entry ? entry.link : null;
        }

        if (nextLink === activeLink) {
            return;
        }

        if (activeLink) {
            activeLink.removeAttribute("aria-current");
        }

        if (nextLink) {
            nextLink.setAttribute("aria-current", "true");
        }

        activeLink = nextLink;
    }

    function queueUpdate() {
        if (updateQueued) {
            return;
        }

        updateQueued = true;
        window.requestAnimationFrame(updateActiveLink);
    }

    function unlock() {
        if (lockedLink === null) {
            return;
        }

        lockedLink = null;
        queueUpdate();
    }

    entries.forEach(function (entry) {
        entry.link.addEventListener("click", function () {
            lockedLink = entry.link;
            updateActiveLink();
        });
    });

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    window.addEventListener("wheel", unlock, { passive: true });
    window.addEventListener("touchmove", unlock, { passive: true });
    window.addEventListener("keydown", function (event) {
        if (scrollKeys.includes(event.key)) {
            unlock();
        }
    });
    updateActiveLink();
})();