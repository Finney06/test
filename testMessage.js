// Import the necessary library
const { Client } = require('whatsapp-web.js');
const client = new Client();

// Log in and then send the message
client.on('ready', () => {
    console.log('Client is ready!');

    // Send a message to the specified number
    const number = '09025656789@c.us'; // Use the format for WhatsApp numbers
    const message = 'This is a test message from the script!';

    client.sendMessage(number, message)
        .then(response => {
            console.log('Message sent successfully:', response);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
});

// Initialize the client
client.initialize();
