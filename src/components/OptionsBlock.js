import { Option } from './Option'

export const OptionsBlock = ({ options, onResetOptions }) => {
  return (
    <div>
      <button onClick={onResetOptions} disabled={!options.length}>
        Delete options
      </button>
      {options.map((option, i) => (
        <Option key={i} optionDescription={option} />
      ))}
    </div>
  )
}
