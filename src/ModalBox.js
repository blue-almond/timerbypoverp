import { useState } from 'react';

import { FiSettings } from 'react-icons/fi';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default ModalBox;

function ModalBox({
  longBreak,
  shortBreak,
  min,
  setStart,
  setSec,
  setShortBreak,
  setLongBreak,
  setMin,
  setAmount,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <FiSettings className='settings' onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='box'>
          <form onSubmit={(e) => e.preventDefault()} className='form-conteiner'>
            <h1 className='title__form'>Settings</h1>
            <h3>Time ( minutes )</h3>
            <section className='form__inputs'>
              <div className='pomodoro'>
                <h5 className='input__title'>pomodoro</h5>
                <input
                  type='number'
                  min='10'
                  max='50'
                  value={min}
                  onChange={(e) => {
                    setMin(e.target.value);
                    setAmount(e.target.value);
                  }}
                />
              </div>
              <div className='short__rest'>
                <h5 className='input__title'>short rest</h5>
                <input
                  type='number'
                  min='5'
                  max='20'
                  value={shortBreak}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setShortBreak(e.target.value);
                  }}
                />
              </div>
              <div className='long__rest'>
                <h5 className='input__title'>long rest</h5>
                <input
                  type='number'
                  min='10'
                  max='30'
                  value={longBreak}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setLongBreak(e.target.value);
                  }}
                />
              </div>
            </section>
            <section className='btns'>
              <button className='btn-form ' onClick={handleClose}>
                apply
              </button>
              <button
                className='btn-form '
                onClick={() => {
                  setMin(25);
                  setLongBreak(10);
                  setShortBreak(5);
                  setSec(0);
                  setStart(false);
                  handleClose();
                }}
              >
                reset
              </button>
            </section>
          </form>
        </Box>
      </Modal>
    </>
  );
}
