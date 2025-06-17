
const OtpInput = ({ value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor="otp-input">Enter OTP:</label>
            <input
                id="otp-input"
                type="text"
                value={value}
                onChange={(e) => {
                    const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                    if (onlyNums.length <= 6) {
                        onChange(onlyNums);
                    }
                }}
                placeholder="Enter 6-digit OTP"
                maxLength="6"
                pattern="[0-9]*"
                inputMode="numeric"
                autoComplete="one-time-code"
                className="form-control"
                required
            />
            <small className="form-text text-muted">
                Please enter the 6-digit code sent to your phone
            </small>
        </div>
    );
};

export default OtpInput;