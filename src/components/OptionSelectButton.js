const OptionSelectButton = ({ handleOptionSelect, isDisabled }) => (
  <button
    className={`button button--main-button ${!isDisabled && 'button--active'}`}
    onClick={handleOptionSelect}
    disabled={isDisabled}
  >
    What should I do?
  </button>
)

export default OptionSelectButton
