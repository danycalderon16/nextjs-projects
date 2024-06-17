// app/api/auth/login/route.ts

import { NextRequest, NextResponse } from "next/server";
import { CognitoIdentityServiceProvider } from "aws-sdk";

const cognito = new CognitoIdentityServiceProvider({
  region: "us-east-1",
});

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const params = {
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: "57b8j8pu255e93nbkm209ac3pe",
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };

    const data = await cognito.initiateAuth(params).promise();
    // Comprueba si la autenticación fue exitosa
    if (data.AuthenticationResult) {
      return NextResponse.json(data.AuthenticationResult);
    } else {
      return NextResponse.json(
        { error: "Authentication failed" },
        { status: 401 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
