class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;
    this.render();

    this.$imageInfo.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("close") ||
        e.target.classList.contains("ImageInfo")
      ) {
        $imageInfo.style.display = "none";
      }
    });
  }

  showDetail(data) {
    api
      .fetchDetailCat(data.image.id)
      .then((cat) => this.setState({ visible: true, image: cat.data }));
  }

  closeModal() {
    this.setState({
      visible: false,
      data: this.data,
    });
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;
      console.log(this.data);

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
