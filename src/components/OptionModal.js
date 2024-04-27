import Modal from 'react-modal'

const OptionModal = ({ selectedOption, onClearSelection }) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Selected Option"
    appElement={document.getElementById('app')}
  >
    <h3>Selected Option</h3>
    {selectedOption && <p>{selectedOption}</p>}
    <button onClick={onClearSelection}>Good luck!</button>
  </Modal>
)

export default OptionModal
