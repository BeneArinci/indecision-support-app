import Modal from 'react-modal'

const OptionModal = ({ selectedOption, onClearSelection }) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Selected Option"
    appElement={document.getElementById('app')}
    closeTimeoutMS={200}
    className={'modal'}
  >
    <h3 className="modal__title">Selected Option</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button button--active" onClick={onClearSelection}>
      Good luck!
    </button>
  </Modal>
)

export default OptionModal
