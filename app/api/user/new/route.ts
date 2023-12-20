import { connectToDb } from "@/utils/db";
import User from "@/models/user";
import { hashPassword, validateUser } from "../fns";
import { NextRequest, NextResponse } from "next/server";
connectToDb();

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

export const POST = async (req: NextRequest) => {
  try {
    const userCred: UserCredentials = await req.json();
    // Use the validator function
    const validationErrors = validateUser(userCred);

    if (validationErrors) {
      // Return validation errors
      console.log(validationErrors);
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }

    const hashedPassword = await hashPassword(userCred.password);
    console.log(hashedPassword);

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
      const savedUser = await newUser.save();

      return NextResponse.json({
        message: "Form submitted successfully",
        success: true,
        savedUser,
      });
    } catch (saveError: any) {
      if (saveError.code === 11000) {
        // Unique constraint violation
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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
