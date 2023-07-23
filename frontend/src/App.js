console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.darkThemeToggle = new DarkThemeToggle({
      $target,
    });

    this.loading = new Loading({
      $target,
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        this.loading.show();
        api
          .fetchCats(keyword)
          .then(({ data }) => {
            this.setState(data);
            this.loading.hide();
          })
          .catch((error) => this.loading.hide());
      },
      onClick: () => {
        this.keyWordHistory.initHistory();
      },
    });

    this.keyWordHistory = new KeywordHistory({
      $target,
      onSearch: (keyword) => {
        this.loading.show();
        api
          .fetchCats(keyword)
          .then(({ data }) => {
            this.setState(data);
            this.loading.hide();
          })
          .catch((error) => this.loading.hide());
      },
    });

    this.randomBtn = new RandomBtn({
      $target,
      onClick: () => {
        this.loading.show();
        api.fetchRandomCats().then(({ data }) => {
          this.setState(data);
          this.loading.hide();
        });
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.showDetail({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
