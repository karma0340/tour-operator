import User from '../models/User.js';
import smsService from '../services/smsService.js';

// Generate OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// OTP-Based Registration
export const register = async (req, res) => {
    try {
        const { countryCode, phoneNumber, language, otp } = req.body;

        // If OTP is provided, verify it
        if (otp) {
            const user = await User.findOne({ countryCode, phoneNumber });
            if (!user || user.otp !== otp) {
                return res.status(400).json({ success: false, message: 'Invalid OTP.' });
            }

            // Update user verification status
            user.isVerified = true;
            user.otp = undefined; // Clear OTP after verification
            await user.save();

            return res.status(200).json({ 
                success: true, 
                message: 'Registration successful.',
                token: 'dummy-token' // In production, generate a real JWT token
            });
        }

        // If OTP is not provided, send new OTP
        const newOTP = generateOTP();
        
        // Check if user already exists
        let user = await User.findOne({ countryCode, phoneNumber });
        if (user) {
            // Update existing user's OTP
            user.otp = newOTP;
            await user.save();
        } else {
            // Create new user
            user = new User({ 
                countryCode, 
                phoneNumber, 
                language: language || 'en',
                otp: newOTP
            });
            await user.save();
        }

        // Send OTP via SMS
        await smsService.sendOtp(phoneNumber, newOTP);

        res.status(200).json({ 
            success: true, 
            message: 'OTP sent successfully.' 
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Registration failed. Please try again.' 
        });
    }
};

// OTP-Based Login
export const login = async (req, res) => {
    try {
        const { countryCode, phoneNumber, otp, requestOtp } = req.body;

        // If just requesting OTP
        if (requestOtp) {
            const newOTP = generateOTP();
            const user = await User.findOne({ countryCode, phoneNumber });

            if (!user) {
                return res.status(404).json({ 
                    success: false, 
                    message: 'User not found. Please register first.' 
                });
            }

            user.otp = newOTP;
            await user.save();
            await smsService.sendOtp(phoneNumber, newOTP);

            return res.status(200).json({ 
                success: true, 
                message: 'OTP sent successfully.' 
            });
        }

        // Verify OTP
        const user = await User.findOne({ countryCode, phoneNumber });
        if (!user || user.otp !== otp) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid OTP or user not found.' 
            });
        }

        // Clear OTP after successful verification
        user.otp = undefined;
        await user.save();

        // In production, generate a real JWT token here
        res.status(200).json({ 
            success: true, 
            message: 'Login successful.',
            token: 'dummy-token'
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Login failed. Please try again.' 
        });
    }
};