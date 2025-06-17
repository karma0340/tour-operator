
const countries = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+91', name: 'India' },
    { code: '+61', name: 'Australia' },
    { code: '+81', name: 'Japan' },
    // Add more countries as needed
];

const CountrySelect = ({ value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor="country-select">Country Code:</label>
            <select
                id="country-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="form-control"
            >
                <option value="">Select Country Code</option>
                {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                        {country.name} ({country.code})
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountrySelect;