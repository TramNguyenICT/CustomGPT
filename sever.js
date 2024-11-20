const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await axios.post("YOUR_GPT_API_ENDPOINT", {
            prompt: message,
        }, {
            headers: { Authorization: `Bearer YOUR_API_KEY` }
        });
        res.json({ reply: response.data.choices[0].text });
    } catch (error) {
        res.status(500).send("Error communicating with GPT API");
    }
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});