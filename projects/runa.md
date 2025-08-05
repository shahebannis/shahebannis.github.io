# RUNA

RUNA is an advanced, agentic AI assistant inspired by Jarvis from Iron Man. Designed to be your personal technical aide, RUNA combines natural conversation, memory, and tool use to help automate tasks, answer questions, and manage information with efficiency, wit, and a touch of British sarcasm.

---

## Features

### ✅ Conversational AI
- **Text and Voice Input:** Interact with RUNA using either typed text or your voice.
- **Voice Output:** RUNA can respond using text-to-speech for a more natural assistant experience.
- **Personality:** RUNA mimics Jarvis’ calm, polite, and subtly humorous style, providing concise and technically precise answers.

### ✅ Persistent Memory
- **Fact Storage:** RUNA automatically stores facts and conversation history, allowing it to recall information from previous sessions.
- **Semantic Recall (RAG):** Uses semantic search to retrieve relevant facts and inject them into the conversation, making responses more context-aware.
- **Automatic Conversation Logging:** Every user and assistant message is stored for future reference.

### ✅ Modular & Extensible Design
- **Agent Architecture:** The code is structured around an Agent class, making it easy to add new capabilities.
- **Tool Registry (Placeholder):** The foundation is laid for integrating external tools and scripts, allowing RUNA to perform actions beyond conversation.

### ✅ Asynchronous Operations
- **Async I/O:** All major operations (model calls, audio processing) are asynchronous for responsive performance.

---

## Planned Features

### 🛠️ Tool Integration
- **Automated Tool Use:** RUNA will be able to invoke scripts, APIs, and system commands to automate tasks (e.g., file management, web search, scheduling).
- **Dynamic Tool Registry:** Easily add and manage new tools or skills.

### 🧠 Advanced Memory & Retrieval
- **Vector Database:** Upgrade from in-memory/pickle storage to a scalable vector database (e.g., ChromaDB, FAISS) for faster and larger-scale semantic recall.
- **Memory Pruning & Summarization:** Automatically summarize or prune old or redundant facts to keep memory relevant and efficient.

### 🤖 Agentic Reasoning
- **Planner Module:** Implement multi-step planning and reasoning, allowing RUNA to break down complex tasks and execute them autonomously.
- **Multi-Agent Support:** Potential for orchestrating multiple agents or models for specialized tasks.

### 🌐 Context Protocols & Interoperability
- **Model Context Protocol (MCP):** Adopt a standardized protocol for managing and sharing context between modules, enabling easier scaling and integration with other AI systems.

### 🗣️ Enhanced Voice Features
- **Speaker Recognition:** Identify different users by voice.
- **Customizable Voice Output:** Choose from different voices or accents.

### 🔒 Security & Privacy
- **User Authentication:** Optional authentication for sensitive actions.
- **Encrypted Memory Storage:** Protect stored facts and conversations.

### Add commands to use in terminal
### UI that pops up on your screen

## Credits

- [Ollama](https://ollama.com/) for local LLM serving
- [Claude](https://docs.anthropic.com/en/docs/intro) for hardware unable to host a local LLM
- [sentence-transformers](https://www.sbert.net/) for semantic search
- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) for speech-to-text
- [pyttsx3](https://pyttsx3.readthedocs.io/) for text-to-speech

---

**RUNA is your ever-evolving digital assistant. Stay tuned for more features