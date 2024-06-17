// app/api/auth/verify/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { CognitoIdentityServiceProvider } from 'aws-sdk';

const cognito = new CognitoIdentityServiceProvider({
  region: process.env.COGNITO_REGION,
});

export async function POST(req: NextRequest) {
  const { email, code } = await req.json();

  // Verify environment variables
  if (!process.env.COGNITO_CLIENT_ID) {
    return NextResponse.json({ error: 'Missing Cognito Client ID' }, { status: 500 });
  }

  try {
    const params = {
      ClientId: process.env.COGNITO_CLIENT_ID,
      Username: email,
      ConfirmationCode: code,
    };

    // Confirm the verification code
    const data = await cognito.confirmSignUp(params).promise();

    return NextResponse.json(data); // Return the confirmation response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
