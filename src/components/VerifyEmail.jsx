import React from "react";

const VerifyEmail = () => {
    return (
        <div className="verify-email">
            <h2>Verify Your Email</h2>
            <p>
                A verification link has been sent to your email. Please check your inbox and click the link to activate your account.
            </p>
            <p>Once verified, you can <a href="/login">Login here</a>.</p>
        </div>
    );
};

export default VerifyEmail;
