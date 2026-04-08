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
        <div className="space-y-3 flex flex-col">
            <label htmlFor={name} className="text-sm font-medium ml-4 text-[var(--text-primary)]">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all"
            />
        </div>
    );
}