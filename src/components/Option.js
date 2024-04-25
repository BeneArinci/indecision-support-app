export const Option = ({ optionDescription, onDeleteOption }) => {
  return (
    <div>
      {optionDescription}
      <button onClick={() => onDeleteOption(optionDescription)}>
        Remove option
      </button>
    </div>
  )
}
