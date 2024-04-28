import { useState } from 'react'
import { IoTrashBinOutline } from 'react-icons/io5'

export const Option = ({ optionDescription, count, onDeleteOption }) => {
  const [deleteButtonVisible, setDeleteButtonVisible] = useState(false)
  return (
    <div
      className="option"
      onMouseEnter={() => setDeleteButtonVisible(true)}
      onMouseLeave={() => setDeleteButtonVisible(false)}
    >
      <p className="option__text">
        {count}. {optionDescription}
      </p>
      <IoTrashBinOutline
        className={`trash-button ${!deleteButtonVisible && 'hidden'}`}
        onClick={() => onDeleteOption(optionDescription)}
      />
    </div>
  )
}
