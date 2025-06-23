import { NextRequest, NextResponse } from 'next/server';
import { ConfidentialClientApplication } from '@azure/msal-node';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ success: false, error: "Invalid email" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const CLIENT_ID = process.env.MS_CLIENT_ID!;
  const CLIENT_SECRET = process.env.MS_CLIENT_SECRET!;
  const TENANT_ID = process.env.MS_TENANT_ID!;
  const USER_ID = process.env.MS_USER_ID!;
  const SCOPES = ["https://graph.microsoft.com/.default"];

  const cca = new ConfidentialClientApplication({
    auth: {
      clientId: CLIENT_ID,
      authority: `https://login.microsoftonline.com/${TENANT_ID}`,
      clientSecret: CLIENT_SECRET,
    },
  });

  const result = await cca.acquireTokenByClientCredential({ scopes: SCOPES });

  if (!result?.accessToken) {
    return new Response(JSON.stringify({ success: false, error: "Token error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Read and encode the file
  const filePath = path.resolve('./public/sample-report.pdf');
  const fileBuffer = fs.readFileSync(filePath);
  const fileBase64 = fileBuffer.toString('base64');

  const mailPayload = {
    message: {
      subject: 'Your Sample Report from BDR',
      body: {
        contentType: 'Text',
        content: 'Attached is your sample report.',
      },
      toRecipients: [
        {
          emailAddress: {
            address: email,
          },
        },
      ],
      attachments: [
        {
          "@odata.type": "#microsoft.graph.fileAttachment",
          name: "BDR-Sample-Report.pdf",
          contentBytes: fileBase64,
        },
      ],
    },
    saveToSentItems: true,
  };

  const response = await fetch(`https://graph.microsoft.com/v1.0/users/${USER_ID}/sendMail`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${result.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mailPayload),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Graph API error:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}