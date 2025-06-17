
const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'hi', name: 'Hindi' },
    // Add more languages as needed
];

const LanguageSelect = ({ value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor="language-select">Preferred Language:</label>
            <select
                id="language-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="form-control"
            >
                <option value="">Select Language</option>
                {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelect;