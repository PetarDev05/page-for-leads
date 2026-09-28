export const dataEmailTemplate = (data) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    mainGoals,
    experience,
    availability,
    age,
    gender,
    weight,
    height,
    budget,
    message,
  } = data;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Coaching Inquiry</title>
      </head>

      <body style="
        margin:0;
        padding:0;
        background-color:#f3f6f5;
        font-family:Arial, Helvetica, sans-serif;
        color:#111827;
      ">

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:30px 15px;">
          <tr>
            <td align="center">

              <!-- Main Container -->
              <table
                width="600"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  max-width:600px;
                  width:100%;
                  background:#ffffff;
                  border-radius:14px;
                  overflow:hidden;
                  box-shadow:0 4px 20px rgba(0,0,0,0.06);
                "
              >

                <!-- Header -->
                <tr>
                  <td style="
                    background:#0d825f;
                    padding:28px 32px;
                  ">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="
                            margin:0 0 6px;
                            color:#d8f3e9;
                            font-size:12px;
                            font-weight:bold;
                            letter-spacing:1px;
                            text-transform:uppercase;
                          ">
                            New Inquiry
                          </p>

                          <h1 style="
                            margin:0;
                            color:#ffffff;
                            font-size:24px;
                            line-height:1.3;
                            font-weight:700;
                          ">
                            New Coaching Application
                          </h1>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Intro -->
                <tr>
                  <td style="padding:30px 32px 10px;">
                    <p style="
                      margin:0;
                      font-size:15px;
                      line-height:1.6;
                      color:#6b7280;
                    ">
                      Someone has submitted a new coaching inquiry through
                      your website. Here are the details:
                    </p>
                  </td>
                </tr>

                <!-- Client Information -->
                <tr>
                  <td style="padding:20px 32px 0;">

                    <p style="
                      margin:0 0 14px;
                      color:#0d825f;
                      font-size:13px;
                      font-weight:bold;
                      letter-spacing:0.5px;
                      text-transform:uppercase;
                    ">
                      Personal Information
                    </p>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        background:#f8faf9;
                        border:1px solid #e5ebe8;
                        border-radius:10px;
                      "
                    >

                      <!-- Name -->
                      <tr>
                        <td style="padding:14px 16px; width:50%;">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            First Name
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${name}
                          </p>
                        </td>

                        <td style="padding:14px 16px; width:50%;">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Last Name
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${lastName}
                          </p>
                        </td>
                      </tr>

                      <!-- Email -->
                      <tr>
                        <td colspan="2" style="padding:14px 16px; border-top:1px solid #e5ebe8;">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Email Address
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${email}
                          </p>
                        </td>
                      </tr>

                      <!-- Phone -->
                      <tr>
                        <td colspan="2" style="padding:14px 16px; border-top:1px solid #e5ebe8;">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Phone Number
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${phoneNumber}
                          </p>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Goals & Experience -->
                <tr>
                  <td style="padding:28px 32px 0;">

                    <p style="
                      margin:0 0 14px;
                      color:#0d825f;
                      font-size:13px;
                      font-weight:bold;
                      letter-spacing:0.5px;
                      text-transform:uppercase;
                    ">
                      Coaching Information
                    </p>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        background:#f8faf9;
                        border:1px solid #e5ebe8;
                        border-radius:10px;
                      "
                    >

                      <!-- Goals -->
                      <tr>
                        <td style="padding:14px 16px;">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Main Goals
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${mainGoals}
                          </p>
                        </td>
                      </tr>

                      <!-- Experience -->
                      <tr>
                        <td style="padding:14px 16px; border-top:1px solid #e5ebe8;">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Training Experience
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${experience}
                          </p>
                        </td>
                      </tr>

                      <!-- Availability -->
                      <tr>
                        <td style="padding:14px 16px; border-top:1px solid #e5ebe8;">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Availability
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${availability}
                          </p>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Physical Information -->
                <tr>
                  <td style="padding:28px 32px 0;">

                    <p style="
                      margin:0 0 14px;
                      color:#0d825f;
                      font-size:13px;
                      font-weight:bold;
                      letter-spacing:0.5px;
                      text-transform:uppercase;
                    ">
                      Personal Details
                    </p>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        background:#f8faf9;
                        border:1px solid #e5ebe8;
                        border-radius:10px;
                      "
                    >

                      <tr>

                        <!-- Age -->
                        <td style="
                          padding:14px 16px;
                          width:33.33%;
                          border-right:1px solid #e5ebe8;
                        ">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Age
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${age}
                          </p>
                        </td>

                        <!-- Gender -->
                        <td style="
                          padding:14px 16px;
                          width:33.33%;
                          border-right:1px solid #e5ebe8;
                        ">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Gender
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${gender}
                          </p>
                        </td>

                        <!-- Weight -->
                        <td style="
                          padding:14px 16px;
                          width:33.33%;
                        ">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Weight
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${weight}
                          </p>
                        </td>

                      </tr>

                      <!-- Height -->
                      <tr>
                        <td colspan="3" style="
                          padding:14px 16px;
                          border-top:1px solid #e5ebe8;
                        ">
                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#8a9490;
                          ">
                            Height
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#111827;
                          ">
                            ${height}
                          </p>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Budget -->
                <tr>
                  <td style="padding:28px 32px 0;">

                    <p style="
                      margin:0 0 14px;
                      color:#0d825f;
                      font-size:13px;
                      font-weight:bold;
                      letter-spacing:0.5px;
                      text-transform:uppercase;
                    ">
                      Budget
                    </p>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        background:#eef8f4;
                        border:1px solid #cce8dc;
                        border-radius:10px;
                      "
                    >
                      <tr>
                        <td style="padding:18px 16px;">

                          <p style="
                            margin:0 0 5px;
                            font-size:12px;
                            color:#5d8174;
                          ">
                            Preferred Budget
                          </p>

                          <p style="
                            margin:0;
                            font-size:18px;
                            font-weight:700;
                            color:#0d825f;
                          ">
                            ${budget}
                          </p>

                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:28px 32px 0;">

                    <p style="
                      margin:0 0 14px;
                      color:#0d825f;
                      font-size:13px;
                      font-weight:bold;
                      letter-spacing:0.5px;
                      text-transform:uppercase;
                    ">
                      Additional Message
                    </p>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        background:#f8faf9;
                        border:1px solid #e5ebe8;
                        border-radius:10px;
                      "
                    >
                      <tr>
                        <td style="padding:18px 16px;">

                          <p style="
                            margin:0;
                            font-size:15px;
                            line-height:1.7;
                            color:#374151;
                            white-space:pre-line;
                          ">
                            ${message}
                          </p>

                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Reply Button -->
                <tr>
                  <td align="center" style="padding:32px;">

                    <a
                      href="mailto:${email}"
                      style="
                        display:inline-block;
                        background:#0d825f;
                        color:#ffffff;
                        padding:13px 24px;
                        border-radius:7px;
                        text-decoration:none;
                        font-size:14px;
                        font-weight:600;
                      "
                    >
                      Reply to ${name}
                    </a>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="
                    background:#f8faf9;
                    border-top:1px solid #e5ebe8;
                    padding:18px 32px;
                    text-align:center;
                  ">

                    <p style="
                      margin:0;
                      font-size:12px;
                      line-height:1.5;
                      color:#9aa39f;
                    ">
                      This email was automatically generated from your
                      website coaching application form.
                    </p>

                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </body>
    </html>
  `;
};
