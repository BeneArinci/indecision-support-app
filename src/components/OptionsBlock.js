import { Option } from './Option'

export const OptionsBlock = ({ options, onResetOptions, onDeleteOption }) => {
  return (
    <div>
      <button onClick={onResetOptions} disabled={!options.length}>
        Delete options
      </button>
      {options.map((option, i) => (
        <Option
          key={i}
          optionDescription={option}
          onDeleteOption={onDeleteOption}
        />
      ))}
    </div>
  )
}
