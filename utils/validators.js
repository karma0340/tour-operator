export const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/; // Adjust regex as per requirements
    return phoneRegex.test(phoneNumber);
};

export const validateOtp = (otp) => {
    const otpRegex = /^[0-9]{6}$/; // Assuming OTP is a 6-digit number
    return otpRegex.test(otp);
};

export const validateLanguage = (language) => {
    const validLanguages = ['en', 'es', 'fr', 'de']; // Add more as needed
    return validLanguages.includes(language);
};