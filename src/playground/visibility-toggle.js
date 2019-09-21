class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      isVisible: false
    };
  }
  handleVisibilityToggle() {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibilityToggle}>
          {this.state.isVisible ? "Hide details" : "Show details"}
        </button>
        <div>
          {this.state.isVisible && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              pellentesque, lacus eget dignissim porta, nibh sem fermentum mi,
              malesuada lacinia arcu est eu tellus. In hac habitasse platea
              dictumst. Fusce iaculis dui vitae nulla mollis feugiat. Nam in
              diam malesuada, facilisis lorem eu, cursus ligula. Donec at eros
              erat. Integer ut nisi quam. Fusce nisl ipsum, mattis sed enim
              sollicitudin, ornare gravida nisi. Curabitur interdum purus nec
              nunc hendrerit tempor. Integer sed vestibulum urna, vitae
              imperdiet odio. Suspendisse ultrices consectetur ante nec
              sagittis. Phasellus mollis gravida laoreet. Etiam a cursus augue,
              et viverra ex. Nunc ut tellus rutrum, scelerisque libero et,
              hendrerit massa.
            </p>
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// PRACTICE WAY - DO NOT USE
// FOR REFERENCE ONLY
//
// const app = {
//   title: "Visibility Toggle",
//   detailsVisible: false
// };

// const toggleDetails = () => {
//   console.log("toggling");
//   app.detailsVisible = !app.detailsVisible;
//   render();
// };

// const appRoot = document.getElementById("app");

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleDetails}>
//         {app.detailsVisible ? "Hide details" : "Show details"}
//       </button>
//       {app.detailsVisible && (
//         <div>
//           <br />
//           Now you see me!
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
