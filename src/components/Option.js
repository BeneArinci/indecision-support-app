export const Option = ({ optionDescription, onDeleteOption }) => {
  return (
    <div>
      {optionDescription}
      <button
        className={'button button--link'}
        onClick={() => onDeleteOption(optionDescription)}
      >
        Remove option
      </button>
    </div>
  )
}
