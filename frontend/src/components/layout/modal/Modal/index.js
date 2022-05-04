import { motion } from 'framer-motion';
import Backrop from '../Backdrop';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 0,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const ModalComponent = ({ handleClose, text }) => {
  return (
    <Backrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="modal orange-gradient"
      ></motion.div>
    </Backrop>
  );
};

export default ModalComponent;
