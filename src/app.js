const app = {
  title: 'Indecision support app',
  subtitle: 'Let your computer help you out!',
  options: ['One', 'Two'],
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  console.log(option)

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderForm()
  }
}

const onRemoveAllOptions = () => {
  app.options = []
  renderForm()
}

const appRoot = document.getElementById('app')

const renderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>Items in the list: {app.options.length}</p>
      <button onClick={onRemoveAllOptions}>Remove options</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderForm()
