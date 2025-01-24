const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();

// Body-Parser Middleware für POST-Anfragen
app.use(bodyParser.json());

// Webhook-Endpunkt, der von GitHub ausgelöst wird
app.post('/deploy', (req, res) => {
  // Überprüfe, ob der Push-Event von GitHub korrekt ist
  console.log('Webhook empfangen:', req.body);

  // Hier führst du den Befehl aus, um das Repository zu pullen und pm2 zu neustarten
  exec('cd /var/www/NextJS-Portify && git pull origin main && pm2 restart nextjs-app', (err, stdout, stderr) => {
    if (err) {
      console.error('Fehler beim Ausführen des Befehls:', stderr);
      return res.status(500).send('Fehler beim Deployment');
    }
    console.log('Deployment erfolgreich:', stdout);
    res.status(200).send('Deployment erfolgreich');
  });
});

// Starte den Server
const port = 80; // Der Standardport für HTTP (oder 443 für HTTPS)
app.listen(port, () => {
  console.log(`Server läuft auf http://168.119.182.213:${port}`);
});
