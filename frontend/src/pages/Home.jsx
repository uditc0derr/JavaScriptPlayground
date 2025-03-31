import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import OutputDisplay from "../components/OutputDisplay";

const Home = () => {
  const [output, setOutput] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
        JavaScript Online Compiler
      </h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-4">
          <CodeEditor setOutput={setOutput} />
        </div>

        <div className="w-full md:w-1/2 p-4 border-l border-gray-700">
          <OutputDisplay output={output} />
        </div>
      </div>
    </div>
  );
};

export default Home;
