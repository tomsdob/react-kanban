import { signin } from "next-auth/client";
import { motion } from "framer-motion";
import FacebookIcon from "../../img/icons/facebook.svg";

export default () => (
  <div className="w-full min-h-screen flex justify-center items-center">
    <motion.button
      whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.975, transition: { duration: 0.2 } }}
      className="px-4 py-3 flex justify-start items-center text-sm font-normal text-white leading-tight bg-blue-600 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:shadow-outline"
      onClick={() =>
        signin("facebook", { callbackUrl: "http://localhost:3000/" })
      }
    >
      <FacebookIcon className="mr-2 w-4 h-4"></FacebookIcon>
      Continue with Facebook
    </motion.button>
  </div>
);
