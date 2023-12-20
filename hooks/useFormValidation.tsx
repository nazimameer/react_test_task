export const useFormValidation = (user: User) => {
    if (!user.status || !user.savings) {
      return { success:false, msg: "All fields are required", route: "/financialinfo"}
    }
    if (
      !user.fullName ||
      !user.dateOfBirth ||
      !user.currentAddress ||
      !user.howLong ||
      !user.about
    ) {
      return { success:false, msg: "All fields are required", route: "/personalinfo"}
    }

    // Validate email
    const email = user.email;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      return { success:false, msg: "Email is required", route: "/"}
    }
    if (!emailRegex.test(email)) {
      return { success:false, msg: "Invalid email address", route: "/"}
    }

    // Validate mobile number
    const mobileNumber = String(user.mobileNumber);;
    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumber) {
      return { success:false, msg: "MobileNumber is required", route: "/"}
    }
    if (!mobileNumberRegex.test(mobileNumber)) {
      return { success:false, msg: "Mobile number should be 10 digits", route: "/"}
    }

    // Validate password
    const password = user.password;
    if (!password) {
      return { success:false, msg: "Password is required", route: "/"}
    }
    if (!/[A-Z]/.test(password)) {
      return { success:false, msg: "Password must contain at least one uppercase letter.", route: "/"}
    }

    // // Check for at least one digit (number)
    if (!/\d/.test(password)) {
      return { success:false, msg: "Password must contain at least one number.", route: "/"}
    }

    // // Check for a minimum length of 6 characters
    if (password.length < 6) {
      return { success:false, msg: "Password must be at least 6 characters long.", route: "/"}
    }

    //  Validate confirm password
    const confirmPassword = user.confirmPassword;
    if (!confirmPassword) {
      return { success:false, msg: "Confirm password is required", route: "/"}
    }
    if (password !== confirmPassword) {
      return { success:false, msg: "Password and Confirm Password must match.", route: "/"}
    }

    return { success:true, msg: "done", route: "#"}
};

