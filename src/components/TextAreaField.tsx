import React from "react";

export default function TextAreaField({
  label,
  name,
  placeholder,
  required = true,
  rows = 5,
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="space-y-2 flex flex-col group">
      <label htmlFor={name} className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-secondary group-focus-within:text-accent-primary transition-colors">
        {label} {required && <span className="text-accent-primary">!!</span>}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-bg-tertiary/50 border-2 border-border/50 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent-primary transition-all font-mono text-sm resize-none"
      />
    </div>
  );
}
