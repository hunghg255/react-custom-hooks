import { useRef, useState } from 'react';
import { useClickOutside } from '../../utils/useClickOutside';

const ClickOutsideComponent = () => {
  const [open, setOpen] = useState(false);
  const refModal = useRef();

  useClickOutside(refModal, () => {
    if (open) setOpen(false);
  });

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <div
        ref={refModal}
        style={{
          display: open ? 'block' : 'none',
          backgroundColor: 'blue',
          color: 'white',
          width: 100,
          height: 100,
          position: 'fixed',
          top: 'calc(50% - 50px)',
          left: 'calc(50% - 50px)',
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
};

export default ClickOutsideComponent;
