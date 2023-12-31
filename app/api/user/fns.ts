// validator.ts
import bcrypt from "bcrypt";
import validator from "validator";

// Define a type for validation errors
interface ValidationErrors {
  email?: string;
  mobileNumber?: string;
  password?: string;
  confirmPassword?: string;
  pronouns?: string;
  fullName?: string;
  dateOfBirth?: string;
  currentAddress?: string;
  howLong?: string;
  about?: string;
  status?: string;
  savings?: string;
}

/**
 * Validate user credentials.
 * @param userCred - User credentials to be validated.
 * @returns Validation errors or null if valid.
 */
export const validateUser = (
  userCred: any
): ValidationErrors | null | undefined => {
  try {
    // Destructure user credentials
    const {
      email,
      mobileNumber,
      password,
      confirmPassword,
      pronouns,
      fullName,
      dateOfBirth,
      currentAddress,
      howLong,
      about,
      status,
      savings,
    } = userCred;

    // Object to store validation errors
    const errors: ValidationErrors = {};

    // Validate email
    if (!validator.isEmail(email)) {
      errors.email = "Invalid email address";
    }

    // Validate password
    if (password.length < 5 || !/(?=.*\d)(?=.*[A-Z])/.test(password)) {
      if (password.length < 5) {
        errors.password = "Password must have at least 6 characters";
      } else {
        errors.password =
          "Password must contain at least one number and one uppercase letter";
      }
    }

    // Validate confirmPassword
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    // Validate phone number (assuming 10 digits is the required format)
    if (!validator.isLength(mobileNumber.toString(), { min: 10, max: 10 })) {
      errors.mobileNumber = "Invalid mobile number";
    }

    // Additional field validations
    if (pronouns.trim() === "") {
      errors.pronouns = "Pronouns cannot be empty";
    }

    if (fullName.trim() === "") {
      errors.fullName = "Full name cannot be empty";
    }

    if (dateOfBirth.trim() === "") {
      errors.dateOfBirth = "Date of birth cannot be empty";
    }

    if (currentAddress.trim() === "") {
      errors.currentAddress = "Current address cannot be empty";
    }

    if (howLong.trim() === "") {
      errors.howLong = "How long cannot be empty";
    }

    if (about.trim() === "") {
      errors.about = "About cannot be empty";
    }

    if (status.trim() === "") {
      errors.status = "Status cannot be empty";
    }

    if (savings === null) {
      errors.savings = "Savings cannot be empty";
    }

    // Return errors if any, otherwise null
    return Object.keys(errors).length > 0 ? errors : null;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Hash a password using bcrypt.
 * @param password - Password to be hashed.
 * @returns Hashed password.
 */
export const hashPassword = async (password: string): Promise<string | undefined> => {
  try {
    // Generate a salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};
