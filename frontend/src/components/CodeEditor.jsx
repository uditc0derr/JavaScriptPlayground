import { useState } from "react";
import { runCode } from "../api/compiler";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ setOutput }) => {
  const [code, setCode] = useState("// Write JavaScript code here");

  const handleRun = async () => {
    const result = await runCode(code);
    setOutput(result.output || result.error);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-gray-800 text-white p-3 rounded-t-md">JavaScript Editor</div>
      <Editor 
        height="300px" 
        language="javascript" 
        theme="vs-dark" 
        value={code} 
        onChange={(value) => setCode(value)} 
        className="border border-gray-700"
      />
      <button onClick={handleRun} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md cursor-pointer">Run</button>
    </div>
  );
};

export default CodeEditor;
