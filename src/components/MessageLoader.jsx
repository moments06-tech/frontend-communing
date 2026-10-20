import React from "react";

const MessageLoader = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      <div className="flex items-center gap-1 rounded-full bg-pink-50 px-3 py-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-pink-400 [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-pink-400 [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-pink-400" />
      </div>

      <span className="text-xs text-pink-500">
        Loading messages...
      </span>
    </div>
  );
};

export default MessageLoader;