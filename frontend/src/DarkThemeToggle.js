class DarkThemeToggle {
  constructor({ $target }) {
    const $DarkThemeToggle = document.createElement("input");
    this.$DarkThemeToggle = $DarkThemeToggle;
    this.$DarkThemeToggle.type = "checkbox";
    $target.append($DarkThemeToggle);
    this.initTheme();

    this.$DarkThemeToggle.addEventListener("click", (e) => {
      const isDark = e.target.checked;
      this.setTheme(isDark);
    });
  }
  initTheme() {
    const curTheme = window.matchMedia("prefers-color-scheme").matches;
    this.setTheme(curTheme);
  }

  setTheme(theme) {
    document.documentElement.setAttribute(
      "color-mode",
      theme ? "dark" : "light"
    );
  }

  render() {}
}
export default DarkThemeToggle;