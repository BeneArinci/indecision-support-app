import { Option } from './Option'

export const OptionsBlock = ({ options, onResetOptions, onDeleteOption }) => {
  return (
    <div>
      <div className="widget-header">
        <h3>Your Options</h3>
        <button
          className={`button button--link ${!!options.length && 'button--link--active'}`}
          onClick={onResetOptions}
          disabled={!options.length}
        >
          Delete options
        </button>
      </div>
      <div className="widget__body">
        {!options.length ? (
          <p className="widget__empty-message">
            Please add an option to get started!
          </p>
        ) : (
          options.map((option, i) => (
            <Option
              key={i}
              count={i + 1}
              optionDescription={option}
              onDeleteOption={onDeleteOption}
            />
          ))
        )}
      </div>
    </div>
  )
}
