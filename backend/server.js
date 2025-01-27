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

// ========================================================================

// API-Endpunkt für das Speichern eines Views (POST)
// Erhöht die View-Zahl
app.post('/view', async (req, res) => {
  const { postId } = req.body;  // postId sollte aus dem Body der Anfrage kommen
  console.log('Received postId for views:', postId);  // Logge postId, um sicherzustellen, dass es korrekt ist
  
  try {
    // Führe das Update in der Datenbank aus
    const result = await pool.query(
      'UPDATE blog_stats SET views = views + 1 WHERE slug = $1 RETURNING views',
      [postId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    console.log('Updated views:', result.rows[0].views);  // Logge das Resultat
    res.json({ totalViews: result.rows[0].views });
  } catch (err) {
    console.error('Fehler beim Erhöhen der Views:', err);
    res.status(500).json({ error: err.message });
  }
});


// API-Endpunkt für das Abrufen der View-Anzahl (GET)
app.get('/views', async (req, res) => {
  const { postId } = req.query;
  console.log('Received postId:', postId);

  try {
    // Hole die Gesamtzahl der Views für den Post
    const result = await pool.query(
      'SELECT views FROM blog_stats WHERE slug = $1',
      [postId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const totalViews = result.rows[0].views;

    res.json({ totalViews });
  } catch (err) {
    console.error('Fehler:', err);
    res.status(500).json({ error: err.message });
  }
});


// API-Endpunkt für das Speichern eines Likes
app.post('/like', async (req, res) => {
  const { postId } = req.body;
  console.log('Received postId:', postId);

  try {
    // Erhöhe die Anzahl der Likes für den gegebenen Beitrag
    const result = await pool.query(
      'UPDATE blog_stats SET likes = likes + 1 WHERE slug = $1 RETURNING *',
      [postId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' }); // Fehler, wenn der Beitrag nicht existiert
    }

    // Hole die aktualisierte Gesamtzahl der Likes
    const totalLikes = result.rows[0].likes;

    res.json({ success: true, totalLikes });
  } catch (err) {
    console.error('Fehler beim Aktualisieren von Likes:', err);
    res.status(500).json({ error: err.message });
  }
});


// API-Endpunkt für das Abrufen der Like-Anzahl
app.get('/likes', async (req, res) => {
  const { postId } = req.query;
  console.log('Received postId:', postId);

  try {
    // Hole die Gesamtzahl der Likes für den Post
    const result = await pool.query(
      'SELECT likes FROM blog_stats WHERE slug = $1',
      [postId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ totalLikes: result.rows[0].likes });
  } catch (err) {
    console.error('Fehler:', err);
    res.status(500).json({ error: err.message });
  }
});



// ========================================================================

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
