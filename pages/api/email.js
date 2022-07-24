 
import { SMTPClient } from 'emailjs';
 
 
export  default  async function handler(req, res) {
 
 const {values}=req.body;

 
 const client = new SMTPClient({
   user: process.env.mail,
   password: process.env.password,
   host: 'smtp.gmail.com',
   ssl:true
 });
 
 try {
	const message = await client.sendAsync({
     
       text: values.message,
       from: process.env.mail,
       to: process.env.mail,
       subject: 'Email From : ' + values.email,
       attachment: [
         { data: `<html>Full Name : <b> ${values.fname + ' ' + values.lname} </b> <br> Phone : ${values.phone}  <br>   ${values.message} </html>`, alternative: true },
       ],
     }
   )
   }
 catch(e){
   res.status(400).end(JSON.stringify({ message:"Error" }))
   return;
 }
 
 res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}