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

  return (
    <div>
      <Header
        title={'Indecision support app'}
        subtitle={'Let your computer help you making a decision!'}
      />
      <OptionsBlock options={options} onResetOptions={handleResetOptions} />
      <AddOptionForm addOption={handleAddOption} options={options} />
      <OptionSelectButton options={options} />
    </div>
  )
}

export default IndecisionSupportApp
