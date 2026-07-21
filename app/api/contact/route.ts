import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(
  request: Request
) {

  try {


    // 检查 Resend Key
    if (!process.env.RESEND_API_KEY) {

      console.error(
        "Missing RESEND_API_KEY"
      );

      return NextResponse.json(
        {
          success: false,
          message: "Missing Resend API Key"
        },
        {
          status: 500
        }
      );

    }



    // 初始化 Resend
    const resend = new Resend(
      process.env.RESEND_API_KEY
    );



    const body = await request.json();



    const {
      name,
      company,
      country,
      phone,
      email,
      product,
      message
    } = body;



    console.log(
      "========== CET CONTACT TEST =========="
    );

    console.log(body);

    console.log(
      "======================================"
    );



    const result =
      await resend.emails.send({


        from:
          "CET Website <onboarding@resend.dev>",


        to:
          [
            "tqxiaoyi1223@gmail.com"
          ],


        subject:
          `New CET Inquiry - ${name || "Customer"}`,



        html:

        `
        <div
        style="
        font-family:Arial;
        padding:30px;
        "
        >

        <h2 style="color:#0f2b4d">
        CET Website Inquiry
        </h2>


        <hr/>


        <p>
        <b>Name:</b>
        ${name || ""}
        </p>


        <p>
        <b>Company:</b>
        ${company || ""}
        </p>


        <p>
        <b>Country:</b>
        ${country || ""}
        </p>


        <p>
        <b>Phone:</b>
        ${phone || ""}
        </p>


        <p>
        <b>Email:</b>
        ${email || ""}
        </p>


        <p>
        <b>Product:</b>
        ${product || ""}
        </p>


        <hr/>


        <h3>
        Message
        </h3>


        <p>
        ${message || ""}
        </p>


        </div>
        `

      });



    if (result.error) {


      console.error(
        "Resend Error:",
        result.error
      );


      return NextResponse.json(
        {
          success:false,
          message:
          result.error.message
        },
        {
          status:500
        }
      );


    }



    return NextResponse.json(
      {
        success:true,
        message:
        "Email sent successfully."
      }
    );



  } catch(error) {


    console.error(
      "API ERROR:",
      error
    );


    return NextResponse.json(
      {
        success:false,
        message:
        "Server error."
      },
      {
        status:500
      }
    );


  }

}