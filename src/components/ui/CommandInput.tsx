"use client";

import {useState, useEffect, useRef, useCallback} from "react";
import {motion, AnimatePresence} from "framer-motion";

interface Command {
    name: string;
    aliases: string[];
    description: string;
    action: () => void;
}

interface CommandInputProps {
    commands: Command[];
    placeholder?: string;
    onExecute?: (command: string) => void;
}

export default function CommandInput({
                                    commands,
                                    placeholder = "Type a command...",
                                    onExecute
                                }: CommandInputProps) {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const getSuggestions = useCallback((value: string) => {
        if (!value.trim()) return [];
        const lower = value.toLowerCase();
        return commands.filter(cmd =>
            cmd.name.toLowerCase().startsWith(lower) ||
            cmd.aliases.some(alias => alias.toLowerCase().startsWith(lower))
        ).slice(0, 5);
    }, [commands]);

    const suggestions = getSuggestions(input);

    useEffect(() => {
        if (input && suggestions.length > 0) {
            setShowSuggestions(true);
            setSuggestionIndex(0);
        } else {
            setShowSuggestions(false);
        }
    }, [input, suggestions]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Tab" && suggestions.length > 0) {
            e.preventDefault();
            setInput(suggestions[suggestionIndex].name);
            setShowSuggestions(false);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        } else if (e.key === "Enter" && input.trim()) {
            e.preventDefault();
            const matched = commands.find(cmd =>
                cmd.name.toLowerCase() === input.toLowerCase() ||
                cmd.aliases.some(alias => alias.toLowerCase() === input.toLowerCase())
            );

            if (matched) {
                matched.action();
                setHistory(prev => [...prev, input]);
                setHistoryIndex(-1);
                setInput("");
                onExecute?.(input);
            } else {
                console.log("Command not found:", input);
            }
            setShowSuggestions(false);
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    const executeSuggestion = (cmd: Command) => {
        cmd.action();
        setHistory(prev => [...prev, input]);
        setHistoryIndex(-1);
        setInput("");
        onExecute?.(input);
        setShowSuggestions(false);
        inputRef.current?.blur();
    };

    return (
        <div className="relative w-full max-w-md">
            <div className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded">
                <span className="text-[var(--accent-primary)]">$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => input && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent outline-none text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] text-sm"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                />
            </div>

            <AnimatePresence>
                {showSuggestions && suggestions.length > 0 && (
                    <motion.div
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        className="absolute top-full left-0 right-0 mt-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded overflow-hidden z-50"
                    >
                        {suggestions.map((cmd, index) => (
                            <button
                                key={cmd.name}
                                onClick={() => executeSuggestion(cmd)}
                                className={`w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors ${
                                    index === suggestionIndex ? "bg-[var(--bg-secondary)]" : ""
                                }`}
                                onMouseEnter={() => setSuggestionIndex(index)}
                            >
                                <span className="text-[var(--accent-primary)]">{cmd.name}</span>
                                <span className="text-[var(--text-secondary)] text-xs">{cmd.description}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}