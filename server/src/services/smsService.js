
// Mock SMS service for testing
const sendOtp = async (phoneNumber, otp) => {
    // Log the OTP to console for testing purposes
    console.log(`
    ========= TEST MODE =========
    Sending OTP: ${otp}
    To Number: ${phoneNumber}
    ===========================
    `);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success in test mode
    return true;
};

export default { sendOtp };