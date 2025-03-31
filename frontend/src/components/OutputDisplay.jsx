const OutputDisplay = ({ output }) => {
    return (
      <div className="mt-6 bg-gray-800 text-white rounded-lg shadow-md p-4 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold text-blue-400">Output:</h2>
        <pre className="mt-2 bg-gray-900 p-3 rounded-md text-green-400 whitespace-pre-wrap min-h-[50px]">
          {output || "No output yet..."}
        </pre>
      </div>
    );
  };
  
  export default OutputDisplay;
  