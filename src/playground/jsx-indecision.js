// http://indecision.mead.io/

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    option && app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

const onMakeDecision = () => {
  app.options.length > 0 && console.log(app.options.random());
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your options"
          : "No options"}
      </p>
      <button onClick={onMakeDecision} disabled={app.options.length === 0}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove all</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter option" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
