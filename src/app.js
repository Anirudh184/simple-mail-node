const express = require('express');

const transporter = require('./mailtransporter');
require('dotenv').config()
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API service is live');
});

app.post('/send-mail', async (req, res) => {
   try{
    await transporter.sendMail({
        from: '"Helpdesk" <admin@enebula.in>',
        to: `${req.body.name}, ${req.body.email}`,
        subject: "Message Received", 
        html: `Hi, ${req.body.name}<br> We have recieved your message and one of us will soon get in touch with you.<br>Team, eNebula`
    }); 

    await transporter.sendMail({
        from: '"Helpdesk" <admin@enebula.in>',
        to: `Admin, admin@enebula.in`,
        subject: "New Message from enebula site", 
        html: `A user has just posted a message for you<br>
                Name: ${req.body.name}<br>
                Email: ${req.body.email}<br>
                Subject: ${req.body.subject}<br>
                Message: ${req.body.comment}`
    });

    res.send();

   } catch(err) {
        console.log(err);
        res.send(400);
   }
});

app.listen(process.env.PORT, (req, res) => {
    console.log("Server started on port" + process.env.PORT);
})