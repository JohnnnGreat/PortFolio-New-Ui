import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  const { email, name, message } = body;
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // You can use other email services
      auth: {
        user: "johnossai20@gmail.com",
        pass: "kblgyogjwalbiwja",
      },
    });

    const mailOptions = {
      from: "email",
      to: "johnossai20@gmail.com",
      subject: "Resource Request Notification",
      html: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Email</title>
        
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
              body {
                  font-family: 'Poppins', sans-serif;
                  background-color: #f9f9f9;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 30px;
                  border-radius: 10px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
      
              h1 {
                  color: #333;
                  text-align: center;
              }
      
              p {
                  font-size: 18px;
                  line-height: 1.6;
                  color: #555;
              }
      
              .contact-info {
                  margin-top: 30px;
              }
      
              .contact-info strong {
                  color: #333;
                  display: block;
                  margin-bottom: 10px;
              }
      
              img {
                  max-width: 100%;
                  height: auto;
                  margin-top: 20px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              }
          </style>
      </head>
      
      <body>
          <div class="container">
              <h1>Contact Form Submission</h1>
              <p>Hi John, You've just received a new message from the website contact form:</p>
              <div class="contact-info">
                  <strong>Name:</strong> ${name}<br>
                  <strong>Email:</strong> ${email}<br>
              </div>
              <p><strong>Message:</strong> ${message}</p>
              <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #a67c5b; color: #fff; text-decoration: none; border-radius: 5px;">Reply Mail</a>
             
          </div>
      </body>
      
      </html>`,
    };

    const res = await transporter.sendMail(mailOptions);
    console.log(res, "res");
    return NextResponse.json({ success: true, message: "Request Sent Successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};
