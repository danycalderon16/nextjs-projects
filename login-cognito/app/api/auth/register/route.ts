// app/api/auth/register/route.ts

import { NextRequest, NextResponse } from "next/server";
import { CognitoIdentityServiceProvider } from "aws-sdk";

const cognito = new CognitoIdentityServiceProvider({
  region: "us-east-1",
});

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();

  try {
    const params = {
      ClientId: "57b8j8pu255e93nbkm209ac3pe",
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: "email",
          Value: email,
        },
        {
          Name: "name",
          Value: name,
        },
        {
          Name: "custom:role",
          Value: "custom:client",
        },
      ],
    };

    const data = await cognito.signUp(params).promise();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
