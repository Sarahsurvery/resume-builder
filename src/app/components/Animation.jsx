import { motion } from 'framer-motion'
// import PropTypes from 'prop-types';
// import { Children } from 'react';

const Animation = ({Children, delay}) =>(
    <motion.div
    initial={{opacity:5}}
    animate={{opacity:1}}
    transition={{ delay, duration:0.5 }}
    >
        {Children}
        </motion.div>
    
);

// Animation.propTypes = {
//     children: PropTypes.node.isRequired, // 'children' should be any valid React node
//     delay: PropTypes.number // 'delay' should be a number, defaulting to 0 if not provided
// };

export default Animation;