import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <Layout title={"Page Not Found"}>
      <div className="text-center flex justify-center items-center flex-col h-[50vh]">
      <h1 className="font-bold text-8xl py-6 ">404</h1>
      <h2 className="text-5xl py-4">Oops ! page Not Found</h2>
      <Link to="/" className="text-2xl text-white bg-indigo-600 rounded px-0  py-3 w-40 hover:bg-indigo-400 duration-500 cursor-pointer">Go Back</Link>

      </div>
    </Layout>
  );
}

export default Pagenotfound;
