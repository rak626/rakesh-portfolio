"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Country {
    code: string;
    name: string;
    dialCode: string;
    flag: string;
}

const countries: Country[] = [
    { code: "IN", name: "India", dialCode: "91", flag: "🇮🇳" },
    { code: "US", name: "United States", dialCode: "1", flag: "🇺🇸" },
    { code: "GB", name: "United Kingdom", dialCode: "44", flag: "🇬🇧" },
    { code: "CA", name: "Canada", dialCode: "1", flag: "🇨🇦" },
    { code: "AU", name: "Australia", dialCode: "61", flag: "🇦🇺" },
    { code: "DE", name: "Germany", dialCode: "49", flag: "🇩🇪" },
    { code: "FR", name: "France", dialCode: "33", flag: "🇫🇷" },
    { code: "SG", name: "Singapore", dialCode: "65", flag: "🇸🇬" },
    { code: "AE", name: "United Arab Emirates", dialCode: "971", flag: "🇦🇪" },
    { code: "JP", name: "Japan", dialCode: "81", flag: "🇯🇵" },
    { code: "BR", name: "Brazil", dialCode: "55", flag: "🇧🇷" },
    { code: "NZ", name: "New Zealand", dialCode: "64", flag: "🇳🇿" },
    { code: "AF", name: "Afghanistan", dialCode: "93", flag: "🇦🇫" },
    { code: "AL", name: "Albania", dialCode: "355", flag: "🇦🇱" },
    { code: "DZ", name: "Algeria", dialCode: "213", flag: "🇩🇿" },
    { code: "AR", name: "Argentina", dialCode: "54", flag: "🇦🇷" },
    { code: "AT", name: "Austria", dialCode: "43", flag: "🇦🇹" },
    { code: "AZ", name: "Azerbaijan", dialCode: "994", flag: "🇦🇿" },
    { code: "BD", name: "Bangladesh", dialCode: "880", flag: "🇧🇩" },
    { code: "BE", name: "Belgium", dialCode: "32", flag: "🇧🇪" },
    { code: "BG", name: "Bulgaria", dialCode: "359", flag: "🇧🇬" },
    { code: "BH", name: "Bahrain", dialCode: "973", flag: "🇧🇭" },
    { code: "BN", name: "Brunei", dialCode: "673", flag: "🇧🇳" },
    { code: "BT", name: "Bhutan", dialCode: "975", flag: "🇧🇹" },
    { code: "BW", name: "Botswana", dialCode: "267", flag: "🇧🇼" },
    { code: "BY", name: "Belarus", dialCode: "375", flag: "🇧🇾" },
    { code: "CH", name: "Switzerland", dialCode: "41", flag: "🇨🇭" },
    { code: "CL", name: "Chile", dialCode: "56", flag: "🇨🇱" },
    { code: "CN", name: "China", dialCode: "86", flag: "🇨🇳" },
    { code: "CO", name: "Colombia", dialCode: "57", flag: "🇨🇴" },
    { code: "CR", name: "Costa Rica", dialCode: "506", flag: "🇨🇷" },
    { code: "CU", name: "Cuba", dialCode: "53", flag: "🇨🇺" },
    { code: "CY", name: "Cyprus", dialCode: "357", flag: "🇨🇾" },
    { code: "CZ", name: "Czech Republic", dialCode: "420", flag: "🇨🇿" },
    { code: "DK", name: "Denmark", dialCode: "45", flag: "🇩🇰" },
    { code: "EG", name: "Egypt", dialCode: "20", flag: "🇪🇬" },
    { code: "EE", name: "Estonia", dialCode: "372", flag: "🇪🇪" },
    { code: "ET", name: "Ethiopia", dialCode: "251", flag: "🇪🇹" },
    { code: "FI", name: "Finland", dialCode: "358", flag: "🇫🇮" },
    { code: "GE", name: "Georgia", dialCode: "995", flag: "🇬🇪" },
    { code: "GH", name: "Ghana", dialCode: "233", flag: "🇬🇭" },
    { code: "GR", name: "Greece", dialCode: "30", flag: "🇬🇷" },
    { code: "HK", name: "Hong Kong", dialCode: "852", flag: "🇭🇰" },
    { code: "HR", name: "Croatia", dialCode: "385", flag: "🇭🇷" },
    { code: "HU", name: "Hungary", dialCode: "36", flag: "🇭🇺" },
    { code: "ID", name: "Indonesia", dialCode: "62", flag: "🇮🇩" },
    { code: "IE", name: "Ireland", dialCode: "353", flag: "🇮🇪" },
    { code: "IL", name: "Israel", dialCode: "972", flag: "🇮🇱" },
    { code: "IQ", name: "Iraq", dialCode: "964", flag: "🇮🇶" },
    { code: "IR", name: "Iran", dialCode: "98", flag: "🇮🇷" },
    { code: "IS", name: "Iceland", dialCode: "354", flag: "🇮🇸" },
    { code: "IT", name: "Italy", dialCode: "39", flag: "🇮🇹" },
    { code: "JO", name: "Jordan", dialCode: "962", flag: "🇯🇴" },
    { code: "KE", name: "Kenya", dialCode: "254", flag: "🇰🇪" },
    { code: "KH", name: "Cambodia", dialCode: "855", flag: "🇰🇭" },
    { code: "KR", name: "South Korea", dialCode: "82", flag: "🇰🇷" },
    { code: "KW", name: "Kuwait", dialCode: "965", flag: "🇰🇼" },
    { code: "KZ", name: "Kazakhstan", dialCode: "7", flag: "🇰🇿" },
    { code: "LA", name: "Laos", dialCode: "856", flag: "🇱🇦" },
    { code: "LB", name: "Lebanon", dialCode: "961", flag: "🇱🇧" },
    { code: "LK", name: "Sri Lanka", dialCode: "94", flag: "🇱🇰" },
    { code: "LT", name: "Lithuania", dialCode: "370", flag: "🇱🇹" },
    { code: "LU", name: "Luxembourg", dialCode: "352", flag: "🇱🇺" },
    { code: "LV", name: "Latvia", dialCode: "371", flag: "🇱🇻" },
    { code: "MA", name: "Morocco", dialCode: "212", flag: "🇲🇦" },
    { code: "MC", name: "Monaco", dialCode: "377", flag: "🇲🇨" },
    { code: "MD", name: "Moldova", dialCode: "373", flag: "🇲🇩" },
    { code: "MM", name: "Myanmar", dialCode: "95", flag: "🇲🇲" },
    { code: "MN", name: "Mongolia", dialCode: "976", flag: "🇲🇳" },
    { code: "MO", name: "Macau", dialCode: "853", flag: "🇲🇴" },
    { code: "MT", name: "Malta", dialCode: "356", flag: "🇲🇹" },
    { code: "MV", name: "Maldives", dialCode: "960", flag: "🇲🇻" },
    { code: "MX", name: "Mexico", dialCode: "52", flag: "🇲🇽" },
    { code: "MY", name: "Malaysia", dialCode: "60", flag: "🇲🇾" },
    { code: "NG", name: "Nigeria", dialCode: "234", flag: "🇳🇬" },
    { code: "NL", name: "Netherlands", dialCode: "31", flag: "🇳🇱" },
    { code: "NO", name: "Norway", dialCode: "47", flag: "🇳🇴" },
    { code: "NP", name: "Nepal", dialCode: "977", flag: "🇳🇵" },
    { code: "OM", name: "Oman", dialCode: "968", flag: "🇴🇲" },
    { code: "PK", name: "Pakistan", dialCode: "92", flag: "🇵🇰" },
    { code: "PH", name: "Philippines", dialCode: "63", flag: "🇵🇭" },
    { code: "PL", name: "Poland", dialCode: "48", flag: "🇵🇱" },
    { code: "PT", name: "Portugal", dialCode: "351", flag: "🇵🇹" },
    { code: "PY", name: "Paraguay", dialCode: "595", flag: "🇵🇾" },
    { code: "QA", name: "Qatar", dialCode: "974", flag: "🇶🇦" },
    { code: "RO", name: "Romania", dialCode: "40", flag: "🇷🇴" },
    { code: "RS", name: "Serbia", dialCode: "381", flag: "🇷🇸" },
    { code: "RU", name: "Russia", dialCode: "7", flag: "🇷🇺" },
    { code: "SA", name: "Saudi Arabia", dialCode: "966", flag: "🇸🇦" },
    { code: "SE", name: "Sweden", dialCode: "46", flag: "🇸🇪" },
    { code: "SK", name: "Slovakia", dialCode: "421", flag: "🇸🇰" },
    { code: "SI", name: "Slovenia", dialCode: "386", flag: "🇸🇮" },
    { code: "ZA", name: "South Africa", dialCode: "27", flag: "🇿🇦" },
    { code: "ES", name: "Spain", dialCode: "34", flag: "🇪🇸" },
    { code: "SD", name: "Sudan", dialCode: "249", flag: "🇸🇩" },
    { code: "TW", name: "Taiwan", dialCode: "886", flag: "🇹🇼" },
    { code: "TH", name: "Thailand", dialCode: "66", flag: "🇹🇭" },
    { code: "TN", name: "Tunisia", dialCode: "216", flag: "🇹🇳" },
    { code: "TR", name: "Turkey", dialCode: "90", flag: "🇹🇷" },
    { code: "UA", name: "Ukraine", dialCode: "380", flag: "🇺🇦" },
    { code: "UG", name: "Uganda", dialCode: "256", flag: "🇺🇬" },
    { code: "UY", name: "Uruguay", dialCode: "598", flag: "🇺🇾" },
    { code: "UZ", name: "Uzbekistan", dialCode: "998", flag: "🇺🇿" },
    { code: "VN", name: "Vietnam", dialCode: "84", flag: "🇻🇳" },
    { code: "YE", name: "Yemen", dialCode: "967", flag: "🇾🇪" },
    { code: "ZM", name: "Zambia", dialCode: "260", flag: "🇿🇲" },
    { code: "ZW", name: "Zimbabwe", dialCode: "263", flag: "🇿🇼" },
];

interface PhoneInputProps {
    label: string;
    name: string;
    value: { code: string; number: string };
    onChange: (value: { code: string; number: string }) => void;
}

export default function PhoneInput({ label, name, value, onChange }: PhoneInputProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const selectedCountry = countries.find((c) => c.code === value.code) || countries[0];

    const handleCountrySelect = (country: Country) => {
        onChange({ code: country.code, number: value.number });
        setDropdownOpen(false);
    };

    return (
        <div className="space-y-3">
            <label className="text-sm font-medium text-[var(--text-primary)]">
                {label}
            </label>
            <div className="flex gap-2">
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-2 px-3 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors min-w-[120px]"
                    >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="text-sm font-medium">+{selectedCountry.dialCode}</span>
                        <ChevronDown className="w-4 h-4 ml-auto text-[var(--text-secondary)]" />
                    </button>

                    {dropdownOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-40"
                                onClick={() => setDropdownOpen(false)}
                            />
                            <div className="absolute top-full left-0 mt-2 w-72 max-h-80 overflow-y-auto rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] shadow-xl z-50">
                                {countries.map((country) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => handleCountrySelect(country)}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[var(--bg-secondary)] transition-colors ${
                                            country.code === value.code
                                                ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                                                : "text-[var(--text-primary)]"
                                        }`}
                                    >
                                        <span className="text-lg">{country.flag}</span>
                                        <span className="text-sm flex-1 text-left">{country.name}</span>
                                        <span className="text-xs text-[var(--text-secondary)]">+{country.dialCode}</span>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <input
                    type="tel"
                    id={name}
                    name={name}
                    placeholder="9876543210"
                    value={value.number}
                    onChange={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, "");
                        onChange({ ...value, number: numericValue });
                    }}
                    className="flex-1 px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all"
                />
            </div>
        </div>
    );
}
