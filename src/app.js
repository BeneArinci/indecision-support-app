import { useState } from 'react'

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

const Options = ({ options }) => {
  return (
    <div>
      {options.map((option, i) => (
        <SingleOption key={i} optionDescription={option} />
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

const ResetOptionsButton = ({ onResetOptions }) => {
  return <button onClick={onResetOptions}>Delete options</button>
}

const IndecisionSupportApp = () => {
  const [options, setOptions] = useState([])
  const handleAddOption = (newOption) => {
    setOptions((currentOptions) => [...currentOptions, newOption])
  }
  const handleResetOptions = () => {
    setOptions([])
  }

  return (
    <div>
      <Header
        title={'Indecision support app'}
        subtitle={'Let your computer help you making a decision!'}
      />
      <Options options={options} />
      <AddOptionForm addOption={handleAddOption} />
      <ResetOptionsButton onResetOptions={handleResetOptions} />
      <OptionSelectButton />
    </div>
  )
}

export default IndecisionSupportApp
