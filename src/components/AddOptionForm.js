import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export const AddOptionForm = ({ addOption, options }) => {
  const [isError, setIsError] = useState(false)
  const notifyError = () => toast.error('Option already available in the list')
  const handleAddOption = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (!!option) {
      if (options.includes(option)) {
        setIsError(true)
        return
      }
      addOption(option)
      e.target.elements.option.value = ''
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
      <form onSubmit={handleAddOption}>
        <input type="text" name="option" />
        <button className="button">Add Option</button>
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
