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

    // window.addEventListener("scroll", (e) => {
    //   const isScrollAtBottom =
    //     window.scrollY + window.innerHeight >=
    //     document.documentElement.scrollHeight;
    //   if (isScrollAtBottom) {
    //     onNextPage(this.page);
    //     this.page++;
    //   }
    // });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  lo = new IntersectionObserver((items, observer) => {
    items.forEach((item, index) => {
      // 아이템이 화면에 보일때 
      if(item.isIntersecting){

        // 마지막 요소를 찾아낸다

        // 마지막 요소라면? nextPage 호출
      }
    });
  });

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        (cat, index) => `
          <div class="item" data-index =${index}>
            <img src="https://via.placeholder.com/200x300/" data-src=${cat.url} alt=${cat.name} />
          </div>
        `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });

      this.lo.observe($item);
    });
  }
}
