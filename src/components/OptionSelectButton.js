const OptionSelectButton = ({ handleOptionSelect, isDisabled }) => (
  <button onClick={handleOptionSelect} disabled={isDisabled}>
    What should I do?
  </button>
)

export default OptionSelectButton
