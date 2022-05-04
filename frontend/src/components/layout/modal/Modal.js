import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import ModalComponent from './Modal/index';

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(!modalOpen);
  const open = () => setModalOpen(!modalOpen);
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      />

      {modalOpen && (
        <ModalComponent modalOpen={modalOpen} handleClose={close} />
      )}
    </div>
  );
};

export default Modal;
