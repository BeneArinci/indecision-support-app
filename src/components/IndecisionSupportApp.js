import { useState } from 'react'
import { AddOptionForm } from './AddOptionForm'
import { OptionsBlock } from './OptionsBlock'
import OptionModal from './OptionModal'
import OptionSelectButton from './OptionSelectButton'

const IndecisionSupportApp = () => {
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(undefined)

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

  const handleOptionPick = () => {
    const randomNum = Math.floor(Math.random() * options.length)
    const option = options[randomNum]
    setSelectedOption(option)
  }

  const handleCloseModal = () => {
    setSelectedOption(undefined)
  }

  return (
    <div>
      <OptionsBlock
        options={options}
        onResetOptions={handleResetOptions}
        onDeleteOption={handleDeleteOption}
      />
      <AddOptionForm addOption={handleAddOption} options={options} />
      <OptionSelectButton
        handleOptionSelect={handleOptionPick}
        isDisabled={!options.length}
      />
      <OptionModal
        selectedOption={selectedOption}
        onCloseModal={handleCloseModal}
      />
    </div>
  )
}

export default IndecisionSupportApp
