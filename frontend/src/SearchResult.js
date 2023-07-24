class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  page = 2;

  constructor({ $target, initialData, onClick, onNextPage }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();

    window.addEventListener("scroll", (e) => {
      const isScrollAtBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight;
      if (isScrollAtBottom) {
        onNextPage(this.page);
        this.page++
      }
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        (cat) => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
  }
}
