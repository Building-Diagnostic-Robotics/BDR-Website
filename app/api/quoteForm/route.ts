// app/api/quoteForm/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { ConfidentialClientApplication } from "@azure/msal-node";
import fetch from "node-fetch";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const bodyText = Array.from(data.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

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
      throw new Error("Failed to acquire access token");
    }

    const mailPayload = {
      message: {
        subject: "New Free Quote Request",
        body: {
          contentType: "Text",
          content: bodyText,
        },
        toRecipients: [
          {
            emailAddress: {
              address: "bilal.sher@bdx-robotics.com",
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: data.get("email") as string,
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/users/${USER_ID}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${result.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailPayload),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Graph API error: ${error}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ [quoteForm] Graph API sendMail failed:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Sorry, we couldn't send your request right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
