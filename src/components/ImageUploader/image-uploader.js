class ImageUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null,
    };

    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  handleImageUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const imageUrl = reader.result;
      this.setState({ imageUrl });
      this.props.onImageUpload(imageUrl);
    };
  }

  render() {
    const { imageUrl } = this.state;

    return React.createElement(
      "div",
      null,
      React.createElement("input", {
        type: "file",
        onChange: this.handleImageUpload,
      }),
      imageUrl &&
        React.createElement("img", { src: imageUrl, alt: "Uploaded image" })
    );
  }
}
