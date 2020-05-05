require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http')
const sendGrid = require('@sendgrid/mail')

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
sendGrid.setApiKey(process.env.SENDGRID_API_KEY)

router.post('/contact-us', (req, res) => {
    const email = req.body.email

    const emailMessage = {
        to: process.env.EMAIL_CONTACT,
        from: process.env.EMAIL_CONTACT,
        replyTo: email
        subject: `Interested in Comero, the restaurant website creation tool?`,
        html: `<div><p>Hi. I'd like to improve my restaurant's website. How can I do that?</p><div>
    <br />
    <div><p>Responding to this email will send your email back to the sender.</p><div>
    `,
    }

    sendGrid.send(emailMessage)
        .then(response => res.send({
            statusCode: 200,
            success: true,
            errors: [],
            data: {}
        }))
        .catch(err => res.send(err))
})

if (process.env.ENVIRONMENT !== 'PRODUCTION') {
    app.use('/api', router)
} else {
    app.use('/.netlify/functions/api', router)
}


module.exports = app
module.exports.handler = serverless(app)