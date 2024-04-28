export const Option = ({ optionDescription, count, onDeleteOption }) => {
  return (
    <div className="option">
      <p className="option__text">
        {count}. {optionDescription}
      </p>
      <button
        className={'button button--link'}
        onClick={() => onDeleteOption(optionDescription)}
      >
        Remove option
      </button>
    </div>
  )
}
