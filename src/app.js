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

const AddOptionForm = ({ addOption, options }) => {
  const [error, setError] = useState(undefined)
  const handleAddOption = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (!!option) {
      if (options.includes(option)) {
        setError('Option already available in the list')
        return
      }
      addOption(option)
      e.target.elements.option.value = ''
      setError(undefined)
    }
  }

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </>
  )
}

const OptionPickButton = ({ options }) => {
  const handleOptionPick = () => {
    const randomNum = Math.floor(Math.random() * options.length)
    const option = options[randomNum]
    alert(option)
  }
  return (
    <button onClick={handleOptionPick} disabled={!options.length}>
      What should I do?
    </button>
  )
}

const ResetOptionsButton = ({ onResetOptions, isDisabled }) => {
  return (
    <button onClick={onResetOptions} disabled={isDisabled}>
      Delete options
    </button>
  )
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
      <AddOptionForm addOption={handleAddOption} options={options} />
      <ResetOptionsButton
        onResetOptions={handleResetOptions}
        isDisabled={!options.length}
      />
      <OptionPickButton options={options} />
    </div>
  )
}

export default IndecisionSupportApp
