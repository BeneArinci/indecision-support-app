const app = {
  title: 'Indecision support app',
  subtitle: 'Let your computer help you out!',
  options: ['One', 'Two'],
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value

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

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const appRoot = document.getElementById('app')

const renderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>Here are your options</p>
      <ol>
        {app.options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button disabled={!app.options.length} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAllOptions}>Remove options</button>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderForm()
