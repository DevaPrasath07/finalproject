document.getElementById('generateOtp').addEventListener('click', function () {
    document.getElementById('otpSection').classList.remove('hidden');
    alert('OTP has been sent to your email or phone.');
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Password reset request submitted successfully!');
});
