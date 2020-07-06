import Index from "../index";
import { signin, useSession } from "next-auth/client";
import { motion } from "framer-motion";

function Login() {
  const [session] = useSession();

  if (!session) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.975, transition: { duration: 0.2 } }}
          className="px-4 py-3 flex justify-start items-center text-sm font-normal text-white leading-tight bg-blue-600 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:shadow-outline"
          onClick={() => signin("facebook")}
        >
          Continue with Facebook
        </motion.button>
      </div>
    );
  }
  return <Index />;
}

export default Login;
