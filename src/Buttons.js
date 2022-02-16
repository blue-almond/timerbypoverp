import { useState } from 'react';

export default Buttons;
function Buttons({
  shortBreak,
  longBreak,
  setAmount,
  setProgress,
  setMin,
  setSec,
}) {
  const reset = () => {
    setSec(0);
    setProgress(0);
  };
  const [active, setActive] = useState(1);
  return (
    <section className='buttons'>
      <button
        className={active === 1 ? 'btn active' : 'btn'}
        onClick={() => {
          setActive(1);
          setMin(25);
          setAmount(25);
          reset();
        }}
      >
        Pomodoro
      </button>
      <button
        className={active === 2 ? 'btn active' : 'btn'}
        onClick={() => {
          setActive(2);
          setMin(shortBreak);
          setAmount(shortBreak);
          reset();
        }}
      >
        Short Break
      </button>
      <button
        className={active === 3 ? 'btn active' : 'btn'}
        onClick={() => {
          setActive(3);
          setMin(longBreak);
          setAmount(longBreak);
          reset();
        }}
      >
        Long Break
      </button>
    </section>
  );
}
