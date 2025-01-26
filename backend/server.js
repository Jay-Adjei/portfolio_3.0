require('dotenv').config(); // Diese Zeile sorgt dafür, dass .env-Datei geladen wird
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 5000;

// CORS aktivieren
app.use(cors({
  origin: 'http://localhost:3000', // Erlaubt Anfragen nur von diesem Frontend-Port
}));

// PostgreSQL-Verbindung mit Umgebungsvariablen
const pool = new Pool({
  user: process.env.DB_USER, 
  host: process.env.DB_HOST, 
  database: process.env.DB_DATABASE, 
  password: process.env.DB_PASSWORD, 
  port: process.env.DB_PORT, 
});

app.use(express.json()); // Damit wir JSON-Daten empfangen können

// API-Endpunkt für das Speichern eines Likes
// API-Endpunkt für das Speichern eines Likes
app.post('/like', async (req, res) => {
  const { sessionId } = req.body;
  console.log('Received sessionId:', sessionId);

  try {
    // Überprüfen, ob der Benutzer bereits ein Like abgegeben hat
    const existingLike = await pool.query(
      'SELECT * FROM Likes WHERE sessionId = $1',
      [sessionId]
    );

    if (existingLike.rows.length > 0) {
      return res.status(400).json({ message: 'You have already liked' }); // Fehler, wenn bereits geliked
    }

    // Wenn der Benutzer noch nicht geliked hat, Like speichern
    const result = await pool.query(
      'INSERT INTO Likes (sessionId) VALUES ($1) RETURNING *',
      [sessionId]
    );
    console.log('Inserted row:', result.rows[0]);

    res.json({ success: true, like: result.rows[0] });
  } catch (err) {
    console.error('Fehler beim Einfügen von Like:', err);
    res.status(500).json({ error: err.message });
  }
});

// API-Endpunkt für das Abrufen der Like-Anzahl
// Ändere den GET /likes Endpunkt
app.get('/likes', async (req, res) => {
  const { sessionId } = req.query;
  
  try {
    // Hole Gesamt-Likes und ob der aktuelle User geliked hat
    const totalResult = await pool.query('SELECT COUNT(*) FROM likes');
    const userResult = await pool.query(
      'SELECT EXISTS(SELECT 1 FROM likes WHERE sessionId = $1) AS has_liked',
      [sessionId]
    );
    
    res.json({
      totalLikes: Number(totalResult.rows[0].count),
      hasLiked: userResult.rows[0].has_liked
    });
  } catch (err) {
    console.error('Fehler:', err);
    res.status(500).json({ error: err.message });
  }
});



// API-Endpunkt für das Abrufen der Like-Anzahl
app.get('/likes', async (req, res) => {
  const { sessionId } = req.query;
  console.log('Received sessionId:', sessionId);

  try {
    // Holen der Anzahl der Likes aus der DB
    const result = await pool.query(
      'SELECT COUNT(*) FROM Likes WHERE sessionId = $1',
      [sessionId]
    );
    
    const likeCount = result.rows[0].count;
    console.log('Like-Anzahl:', likeCount);

    // Sende die Like-Anzahl als JSON zurück
    res.json({ likeCount });
  } catch (err) {
    console.error('Fehler beim Abrufen der Like-Anzahl:', err);
    res.status(500).json({ error: err.message });
  }
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
