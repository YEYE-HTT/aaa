// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// 假设使用 MongoDB
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'; // MongoDB URI
const client = new MongoClient(uri);

app.use(cors());

app.get('/search', async (req, res) => {
    const query = req.query.query;
    try {
        await client.connect();
        const database = client.db('yourDatabase');
        const collection = database.collection('yourCollection');
        
        // 查找匹配的文档
        const results = await collection.find({ name: { $regex: query, $options: 'i' } }).toArray();
        
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error querying database');
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
