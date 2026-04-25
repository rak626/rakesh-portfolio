export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="space-y-2 flex flex-col group">
      <label htmlFor={name} className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-secondary group-focus-within:text-accent-primary transition-colors">
        {label} {required && <span className="text-accent-primary">!!</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-bg-tertiary/50 border-2 border-border/50 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent-primary transition-all font-mono text-sm"
      />
    </div>
  );
}
