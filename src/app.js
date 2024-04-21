const Header = () => {
  return (
    <div>
      <h1>Indecision support app</h1>
      <h2>Let your computer help you making a decision!</h2>
    </div>
  )
}

const Options = ({ options }) => {
  return (
    <div>
      {options.map((option) => (
        <SingleOption optionDescription={option} />
      ))}
    </div>
  )
}

const SingleOption = ({ optionDescription }) => {
  return <p>{optionDescription}</p>
}

const AddOptionForm = ({ addOption }) => {
  const handleAddOption = (e) => {
    e.preventDefault()
    addOption(e.target.elements.option.value)
    e.target.elements.option.value = ''
  }
  return (
    <form onSubmit={handleAddOption}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  )
}

const OptionSelectButton = () => {
  return <button>What should I do?</button>
}

const IndecisionSupportApp = () => {
  const handleAddOption = (newOption) => {
    console.log(newOption)
  }
  return (
    <div>
      <Header />
      <Options options={['a', 'b', 'c']} />
      <AddOptionForm addOption={handleAddOption} />
      <OptionSelectButton />
    </div>
  )
}

const appRoot = document.getElementById('app')

ReactDOM.render(<IndecisionSupportApp />, appRoot)
