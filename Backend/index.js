const express = require("express");
const app =express();

const SibApiV3Sdk = require('sib-api-v3-sdk');
const htmlContent = require("./templte");

require("dotenv").config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;
app.use(express.json());

app.get("/",(req,res)=>{
    return res.send("Hello World")
})

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.EMAIL_API_KEY;


app.post("/email", async (req,res)=>{
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sender ={
        email : "test123@gmail.com",
        name : "vikas"
    };

    const recevier = [
        {
            email : req.body.email,
        },
    ];
    try {
        const sendEmail = await apiInstance.sendTransacEmail({
            sender,
            to: recevier,
            subject: "Test Email from Bervo",
            textContent:"Test Email",
            htmlContent,
        })
        return res.send(sendEmail)
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
})

const PORT =process.env.PORT ||4000

app.listen(PORT,()=>{
    console.log("sever start")
})