// Theme toggling functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleText = document.getElementById("theme-toggle-text");
  const htmlElement = document.documentElement;
  const bodyElement = document.body;

  // Check for saved theme preference or use the default theme from the body
  const getStoredTheme = () => localStorage.getItem("theme");
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    // Get the initial theme from the body's theme attribute
    const initialTheme = bodyElement.getAttribute("theme") || "light";
    return initialTheme;
  };

  // Set theme on document and update button text
  const setTheme = (theme) => {
    bodyElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);

    // Update button text based on current theme
    if (themeToggleText) {
      if (theme === "dark") {
        themeToggleText.textContent = "☾";
      } else if (theme === "light") {
        themeToggleText.textContent = "☀";
      } else {
        themeToggleText.textContent = "⚙";
      }
    }
  };

  // Initial theme setup
  setTheme(getPreferredTheme());

  // Toggle between light, dark, and auto
  const toggleTheme = () => {
    const currentTheme = bodyElement.getAttribute("theme");

    if (currentTheme === "light") {
      setTheme("dark");
    } else if (currentTheme === "dark") {
      setTheme("auto");
    } else {
      setTheme("light");
    }
  };

  // Set up event listeners
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }
});
