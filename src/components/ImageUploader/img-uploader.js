class Image_Uploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      showImageUploader: false,
    };

    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleToggleImageUploader = this.handleToggleImageUploader.bind(this);
  }

  handleImageUpload(imageUrl) {
    this.setState((prevState) => ({
      images: [...prevState.images, imageUrl],
      showImageUploader: false,
    }));
  }

  handleToggleImageUploader() {
    this.setState((prevState) => ({
      showImageUploader: !prevState.showImageUploader,
    }));
  }

  render() {
    const { images, showImageUploader } = this.state;

    return React.createElement(
      "div",
      null,
      showImageUploader
        ? React.createElement(ImageUploader, {
            onImageUpload: this.handleImageUpload,
          })
        : null,
      React.createElement(
        "button",
        { onClick: this.handleToggleImageUploader },
        "Add Image"
      ),
      images.map((imageUrl, index) =>
        React.createElement("img", {
          key: index,
          src: imageUrl,
          alt: `Image ${index}`,
        })
      )
    );
  }
}
