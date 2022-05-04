import { motion } from 'framer-motion';

const Backrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Backrop;
