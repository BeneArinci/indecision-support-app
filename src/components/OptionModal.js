import Modal from 'react-modal'

const OptionModal = ({ selectedOption, onCloseModal }) => (
  <Modal isOpen={!!selectedOption} contentLabel="Selected Option">
    <h3>Selected Option</h3>
    {selectedOption && <p>{selectedOption}</p>}
    <button onClick={onCloseModal}>Good luck!</button>
  </Modal>
)

export default OptionModal
