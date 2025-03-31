const ivm = require("isolated-vm");

exports.runCode = async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: "No code provided" });
    }

    try {
        const isolate = new ivm.Isolate({ memoryLimit: 8 }); 
        const context = await isolate.createContext();
        const jail = context.global;

        const logOutput = [];

        await jail.set("log", (...args) => {
            logOutput.push(args.map(arg => arg.toString()).join(" "));
        });

        await jail.set("global", jail.derefInto());

        const wrappedCode = `
            (function() {
                try {
                    ${code} // User code
                } catch (e) {
                    log("Error: " + e.toString()); // Capture errors with the custom log
                }
            })();
        `;

        const script = await isolate.compileScript(wrappedCode);
        await script.run(context, { timeout: 5000 }); 

        const output = logOutput.length > 0 ? logOutput.join("\n") : "No output";
        res.json({ output });
    } catch (error) {
        res.status(500).json({ error: "Error executing code: " + error.message });
    }
};
