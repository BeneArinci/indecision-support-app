import { useState } from 'react'
import { AddOptionForm } from './AddOptionForm'
import { Header } from './Header'
import { OptionSelectButton } from './OptionSelectButton'
import { OptionsBlock } from './OptionsBlock'

const IndecisionSupportApp = () => {
  const [options, setOptions] = useState([])
  const handleAddOption = (newOption) => {
    setOptions((currentOptions) => [...currentOptions, newOption])
  }
  const handleResetOptions = () => {
    setOptions([])
  }

  const handleDeleteOption = (optionToDelete) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => optionToDelete !== option)
    )
  }

  return (
    <div>
      <OptionsBlock
        options={options}
        onResetOptions={handleResetOptions}
        onDeleteOption={handleDeleteOption}
      />
      <AddOptionForm addOption={handleAddOption} options={options} />
      <OptionSelectButton options={options} />
    </div>
  )
}

export default IndecisionSupportApp
