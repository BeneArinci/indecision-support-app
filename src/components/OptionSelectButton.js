export const OptionSelectButton = ({ options }) => {
  const handleOptionPick = () => {
    const randomNum = Math.floor(Math.random() * options.length)
    const option = options[randomNum]
    alert(option)
  }
  return (
    <button onClick={handleOptionPick} disabled={!options.length}>
      What should I do?
    </button>
  )
}
