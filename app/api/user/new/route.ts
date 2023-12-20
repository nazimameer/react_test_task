import { connectToDb } from "@/utils/db";
import User from "@/models/user";
import { hashPassword, validateUser } from "../fns";
import { NextRequest, NextResponse } from "next/server";

// Establish a database connection
connectToDb();

// Define the shape of the user credentials expected in the request body
interface UserCredentials {
  email: string;
  mobileNumber: number;
  password: string;
  confirmPassword: string;
  pronouns: string;
  fullName: string;
  dateOfBirth: string;
  currentAddress: string;
  howLong: string;
  about: string;
  status: string;
  savings: number;
}

// Handler for processing POST requests to create a new user
export const POST = async (req: NextRequest) => {
  try {
    // Parse the request body as user credentials
    const userCred: UserCredentials = await req.json();

    // Use the validator function to check the user credentials
    const validationErrors = validateUser(userCred);

    if (validationErrors) {
      // Return validation errors if any
      console.log(validationErrors); 
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }

    // Hash the user's password before saving it to the database
    const hashedPassword = await hashPassword(userCred.password);

    // Create a new User instance with the provided credentials
    const newUser = new User({
      email: userCred.email,
      mobileNumber: userCred.mobileNumber,
      password: hashedPassword,
      pronouns: userCred.pronouns,
      fullName: userCred.fullName,
      dateOfBirth: userCred.dateOfBirth,
      currentAddress: userCred.currentAddress,
      howLong: userCred.howLong,
      about: userCred.about,
      status: userCred.status,
      savings: userCred.savings,
    });

    try {
      // Save the new user to the database
      const savedUser = await newUser.save();
      const { _id } = savedUser;

      // Return a success response with the newly created user's ID
      return NextResponse.json({
        message: "Form submitted successfully",
        success: true,
        _id,
      });
    } catch (saveError: any) {
      if (saveError.code === 11000) {
        // Unique constraint violation (e.g., duplicate email or mobile number)
        const errorMessage = saveError.keyPattern.email
          ? "Email address is already exist"
          : "Mobile number is already exist";
        return NextResponse.json({ error: errorMessage }, { status: 400 });
      } else {
        // Other save errors
        console.error("Error saving user:", saveError);
        return NextResponse.json({ error: saveError.message }, { status: 500 });
      }
    }
  } catch (error: any) {
    // Handle unexpected errors during request processing
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
