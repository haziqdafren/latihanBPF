import React from "react";
import { motion } from "framer-motion";

const ErrorPage = ({ errorCode = 404 }) => {
  let message;

  switch (errorCode) {
    case 400:
      message = "Bad Request";
      break;
    case 401:
      message = "Unauthorized";
      break;
    case 402:
      message = "Payment Required";
      break;
    default:
      message = "An error occurred";
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-white px-4">
      <motion.div
        className="text-center p-8 bg-white shadow-xl rounded-xl border border-red-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-6xl font-extrabold text-red-500 mb-2"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {errorCode}
        </motion.h1>
        <p className="text-2xl text-gray-800 font-medium">{message}</p>
        <p className="text-gray-500 mt-2">Please check the request or try again later.</p>
        <a
          href="/"
          className="inline-block mt-6 bg-red-500 text-white px-5 py-2 rounded-full shadow hover:bg-red-600 transition"
        >
          Back to Home
        </a>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
