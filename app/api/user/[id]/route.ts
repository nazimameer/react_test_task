import { connectToDb } from "@/utils/db";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

// Establish a database connection
connectToDb();

/**
 * Handler for retrieving user information by ID.
 * @param req - The Next.js request object.
 * @param params - Parameters extracted from the request URL.
 * @returns NextResponse - JSON response containing user information or error.
 */

interface RouteParams {
  id: string; 
}
export const GET = async (
  req: NextRequest,
  { params }: { params: RouteParams }
) => {
  try {
    // Extract user ID from the request parameters
    const { id } = params;

    // Log the user ID for debugging purposes
    console.log("User ID:", id);

    try {
      // Retrieve user information by ID, excluding __v and password fields
      const user = await User.findById(id, { __v: 0, password: 0 });

      if (!user) {
        // If user is not found, return a 404 response
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Return a JSON response with the user information
      return NextResponse.json({ user }, { status: 200 });
    } catch (error: any) {
      // Handle any errors that occur during the database query
      console.error("Error retrieving user:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } catch (error: any) {
    // Handle any unexpected errors
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
