import { useState } from 'react'

export const AddOptionForm = ({ addOption, options }) => {
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
        <button className="button">Add Option</button>
      </form>
    </>
  )
}
