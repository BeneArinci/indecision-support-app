import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export const AddOptionForm = ({ addOption, options }) => {
  const [optionValue, setOptionValue] = useState('')
  const [isError, setIsError] = useState(false)

  const onChange = (event) => {
    setOptionValue(event.target.value)
  }
  const notifyError = () => toast.error('Option already available in the list')

  const handleAddOption = (e) => {
    e.preventDefault()
    const option = optionValue.trim()
    if (!!option) {
      if (options.includes(option)) {
        setIsError(true)
        return
      }
      addOption(option)
      setOptionValue('')
    }
  }

  useEffect(() => {
    if (!!isError) {
      notifyError()
      setIsError(false)
    }
  })

  return (
    <>
      <form className="add-option-form" onSubmit={handleAddOption}>
        <input
          className={'add-option__input'}
          type="text"
          name="option"
          placeholder="One of your options is.."
          onChange={onChange}
          value={optionValue}
          autoComplete="off"
          autoFocus
        />
        <button
          className={`button ${!!optionValue && 'button--active'}`}
          onSubmit={handleAddOption}
          disabled={!optionValue}
        >
          Add Option
        </button>
      </form>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1c1c1c',
            color: '#fff',
            border: '1px solid',
            borderColor: '#f8ed62',
          },
        }}
      />
    </>
  )
}
