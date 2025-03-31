const mongoose = require("mongoose");

const CodeSnippetSchema = new mongoose.Schema({
    code: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CodeSnippet", CodeSnippetSchema);
