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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>New Coaching Inquiry</title>
      </head>

      <body style="
        margin:0;
        padding:0;
        background:#f5f7fb;
        font-family:Arial, Helvetica, sans-serif;
        color:#1f2937;
      ">

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="padding:32px 16px;"
        >
          <tr>
            <td align="center">

              <!-- Main Container -->
              <table
                width="600"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  width:100%;
                  max-width:600px;
                  background:#ffffff;
                  border-radius:16px;
                  overflow:hidden;
                  box-shadow:0 8px 30px rgba(31,41,55,0.08);
                "
              >

                <!-- Header -->
                <tr>
                  <td style="
                    padding:32px;
                    background:#6da7ff;
                    background:linear-gradient(
                      120deg,
                      #6da7ff 0%,
                      #f069ba 55%,
                      #efaf5b 100%
                    );
                  ">

                    <p style="
                      margin:0 0 8px;
                      color:rgba(255,255,255,0.82);
                      font-size:11px;
                      line-height:1.4;
                      font-weight:700;
                      letter-spacing:1.2px;
                      text-transform:uppercase;
                    ">
                      New Inquiry
                    </p>

                    <h1 style="
                      margin:0;
                      color:#ffffff;
                      font-size:25px;
                      line-height:1.3;
                      font-weight:700;
                    ">
                      New Coaching Application
                    </h1>

                    <p style="
                      margin:10px 0 0;
                      color:rgba(255,255,255,0.9);
                      font-size:14px;
                      line-height:1.5;
                    ">
                      A new potential client has submitted an application.
                    </p>

                  </td>
                </tr>

                <!-- Intro -->
                <tr>
                  <td style="padding:28px 32px 8px;">

                    <p style="
                      margin:0;
                      font-size:14px;
                      line-height:1.6;
                      color:#6b7280;
                    ">
                      Here are the details provided through your coaching
                      application form.
                    </p>

                  </td>
                </tr>

                <!-- Personal Information -->
                <tr>
                  <td style="padding:22px 32px 0;">

                    <p style="
                      margin:0 0 14px;
                      color:#6da7ff;
                      font-size:12px;
                      line-height:1.4;
                      font-weight:700;
                      letter-spacing:0.7px;
                      text-transform:uppercase;
                    ">
                      Contact Information
                    </p>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >

                      <tr>
                        <td
                          width="50%"
                          valign="top"
                          style="padding:0 12px 16px 0;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            First Name
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            line-height:1.4;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${name}
                          </p>
                        </td>

                        <td
                          width="50%"
                          valign="top"
                          style="padding:0 0 16px 12px;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Last Name
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            line-height:1.4;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${lastName}
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td
                          width="50%"
                          valign="top"
                          style="padding:0 12px 16px 0;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Email
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            line-height:1.4;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${email}
                          </p>
                        </td>

                        <td
                          width="50%"
                          valign="top"
                          style="padding:0 0 16px 12px;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Phone
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            line-height:1.4;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${phoneNumber}
                          </p>
                        </td>
                      </tr>

                    </table>

                  </td>
                </tr>

                <!-- Coaching Information -->
                <tr>
                  <td style="padding:10px 32px 0;">

                    <p style="
                      margin:0 0 14px;
                      color:#f069ba;
                      font-size:12px;
                      line-height:1.4;
                      font-weight:700;
                      letter-spacing:0.7px;
                      text-transform:uppercase;
                    ">
                      Coaching Information
                    </p>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >

                      <tr>
                        <td
                          width="50%"
                          valign="top"
                          style="padding:0 12px 16px 0;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Main Goals
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            line-height:1.5;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${mainGoals}
                          </p>
                        </td>

                        <td
                          width="50%"
                          valign="top"
                          style="padding:0 0 16px 12px;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Experience
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            line-height:1.5;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${experience}
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td
                          colspan="2"
                          valign="top"
                          style="padding:0 0 16px;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Availability
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            line-height:1.5;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${availability}
                          </p>
                        </td>
                      </tr>

                    </table>

                  </td>
                </tr>

                <!-- Personal Details -->
                <tr>
                  <td style="padding:10px 32px 0;">

                    <p style="
                      margin:0 0 14px;
                      color:#efaf5b;
                      font-size:12px;
                      line-height:1.4;
                      font-weight:700;
                      letter-spacing:0.7px;
                      text-transform:uppercase;
                    ">
                      Personal Details
                    </p>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >

                      <tr>
                        <td
                          width="25%"
                          valign="top"
                          style="padding:0 10px 16px 0;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Age
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${age}
                          </p>
                        </td>

                        <td
                          width="25%"
                          valign="top"
                          style="padding:0 10px 16px;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Gender
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${gender}
                          </p>
                        </td>

                        <td
                          width="25%"
                          valign="top"
                          style="padding:0 10px 16px;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Weight
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#1f2937;
                          ">
                            ${weight}
                          </p>
                        </td>

                        <td
                          width="25%"
                          valign="top"
                          style="padding:0 0 16px 10px;"
                        >
                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#9ca3af;
                          ">
                            Height
                          </p>

                          <p style="
                            margin:0;
                            font-size:15px;
                            font-weight:600;
                            color:#1f2937;
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
                  <td style="padding:8px 32px 0;">

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="
                        background:#fff8ed;
                        border-radius:10px;
                      "
                    >
                      <tr>
                        <td style="padding:16px 18px;">

                          <p style="
                            margin:0 0 4px;
                            font-size:11px;
                            color:#b17b35;
                            font-weight:600;
                          ">
                            Preferred Budget
                          </p>

                          <p style="
                            margin:0;
                            font-size:18px;
                            line-height:1.4;
                            font-weight:700;
                            color:#d58b32;
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
                  <td style="padding:24px 32px 0;">

                    <p style="
                      margin:0 0 10px;
                      color:#6da7ff;
                      font-size:12px;
                      line-height:1.4;
                      font-weight:700;
                      letter-spacing:0.7px;
                      text-transform:uppercase;
                    ">
                      Additional Message
                    </p>

                    <p style="
                      margin:0;
                      font-size:14px;
                      line-height:1.7;
                      color:#4b5563;
                      white-space:pre-line;
                    ">
                      ${message}
                    </p>

                  </td>
                </tr>

                <!-- Reply Button -->
                <tr>
                  <td align="center" style="padding:30px 32px 34px;">

                    <a
                      href="mailto:${email}"
                      style="
                        display:inline-block;
                        padding:13px 24px;
                        background:#6da7ff;
                        color:#ffffff;
                        border-radius:8px;
                        text-decoration:none;
                        font-size:14px;
                        font-weight:700;
                      "
                    >
                      Reply to ${name}
                    </a>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="
                    padding:18px 32px;
                    background:#fafbfc;
                    text-align:center;
                  ">

                    <p style="
                      margin:0;
                      font-size:11px;
                      line-height:1.5;
                      color:#9ca3af;
                    ">
                      This email was automatically generated from your
                      coaching application form.
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