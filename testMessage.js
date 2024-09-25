require('dotenv').config();
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

// Initialize WhatsApp client with LocalAuth for authentication
const client = new Client({
    authStrategy: new LocalAuth()
});

// Define admin number (replace with your actual number)
const adminNumber = 'YOUR_PHONE_NUMBER@c.us'; // Replace with your phone number in the format required by WhatsApp

client.on('qr', (qr) => {
    // Generate and display the QR code for authentication
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');

    // Function to send birthday messages
    sendBirthdayMessages();
});

client.on('disconnected', (reason) => {
    console.log('Bot was disconnected. Reason:', reason);

    // Send a WhatsApp message to yourself or an admin when disconnected
    client.sendMessage(adminNumber, `The bot was disconnected. Reason: ${reason}`);
});

// Function to send birthday messages
function sendBirthdayMessages() {
    // Define the recipient and message content
    const number = '2347032613041@c.us'; // Replace with the actual recipient number
    const message = 'Happy Birthday! 🎉';

    // Send the message
    client.sendMessage(number, message)
        .then(response => {
            console.log('Message sent successfully:', response);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
}

// Start the WhatsApp client
client.initialize();
