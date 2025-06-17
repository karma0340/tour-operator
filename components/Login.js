import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser, resendOtp } from '../services/api';
import './Auth.css';
import CountrySelect from './CountrySelect';
import OtpInput from './OtpInput';

const Login = () => {
    const history = useHistory();
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [formData, setFormData] = useState({
        countryCode: '',
        phoneNumber: '',
        otp: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [resendTimer, setResendTimer] = useState(0);

    useEffect(() => {
        let timer;
        if (resendTimer > 0) {
            timer = setInterval(() => {
                setResendTimer(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [resendTimer]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        setError('');
    };

    const validatePhoneNumber = () => {
        if (!formData.phoneNumber || !formData.countryCode) {
            setError('Please enter both country code and phone number');
            return false;
        }
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            setError('Please enter a valid 10-digit phone number');
            return false;
        }
        return true;
    };

    const handleRequestOtp = async (e) => {
        e.preventDefault();
        if (!validatePhoneNumber()) return;

        setLoading(true);
        setError('');

        try {
            await loginUser({
                countryCode: formData.countryCode,
                phoneNumber: formData.phoneNumber,
                requestOtp: true
            });
            
            setIsOtpSent(true);
            setResendTimer(30); // Start 30 second timer for resend
        } catch (err) {
            setError(err.message || 'Failed to send OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        if (resendTimer > 0) return;
        
        setLoading(true);
        setError('');

        try {
            await resendOtp({
                countryCode: formData.countryCode,
                phoneNumber: formData.phoneNumber
            });
            setResendTimer(30);
        } catch (err) {
            setError(err.message || 'Failed to resend OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!formData.otp || formData.otp.length !== 6) {
            setError('Please enter a valid 6-digit OTP');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await loginUser({
                countryCode: formData.countryCode,
                phoneNumber: formData.phoneNumber,
                otp: formData.otp
            });

            if (response.success) {
                history.push('/');
            } else {
                setError('Invalid OTP. Please try again.');
            }
        } catch (err) {
            setError(err.message || 'Login failed. Please check your credentials and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={isOtpSent ? handleLogin : handleRequestOtp}>
                    {!isOtpSent ? (
                        <>
                            <div className="form-group">
                                <CountrySelect
                                    value={formData.countryCode}
                                    onChange={(value) => handleInputChange('countryCode', value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone-number">Phone Number:</label>
                                <input
                                    id="phone-number"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                    className="form-control"
                                    placeholder="Enter your 10-digit phone number"
                                    required
                                    pattern="[0-9]{10}"
                                    disabled={loading}
                                />
                            </div>
                            <button type="submit" disabled={loading} className="btn btn-primary">
                                {loading ? 
                                    <span className="spinner"></span> : 
                                    'Get OTP'
                                }
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="form-group">
                                <label>Enter OTP sent to {formData.countryCode} {formData.phoneNumber}</label>
                                <OtpInput
                                    value={formData.otp}
                                    onChange={(value) => handleInputChange('otp', value)}
                                    disabled={loading}
                                />
                            </div>
                            <button type="submit" disabled={loading} className="btn btn-primary">
                                {loading ? 
                                    <span className="spinner"></span> : 
                                    'Login'
                                }
                            </button>
                            <div className="resend-section">
                                <button
                                    type="button"
                                    onClick={handleResendOtp}
                                    disabled={resendTimer > 0 || loading}
                                    className="btn btn-link"
                                >
                                    {resendTimer > 0 
                                        ? `Resend OTP in ${resendTimer}s`
                                        : 'Resend OTP'
                                    }
                                </button>
                            </div>
                        </>
                    )}
                </form>
                <p className="auth-switch">
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;