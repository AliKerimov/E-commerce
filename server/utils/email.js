const nodemailer=require("nodemailer");

const sendMail=async(options)=>{
    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_SERVER,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      });


      const mailOptions={
        from:"Ali Karimov (lkrimov54@gmail.com)",
        to:options.email,
        subject:options.subject,
        text:options.message
      };
      await transport.sendMail(mailOptions)
}
module.exports=sendMail;