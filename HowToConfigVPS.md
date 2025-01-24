
```markdown
# VPS Setup for Next.js (React) Application

## Prerequisites

- A VPS with Ubuntu 24
- Node.js (at least version 18.x)
- PM2 for process management
- Apache as a Reverse Proxy (optional, if you want to use a custom domain)
- Git for version control
- `npm` (or `yarn`)

## Step-by-Step Guide


<details<summary>### 1. Preparing the VPS</summary>>

- **Update and Install Dependencies:**

  ```bash
  sudo apt update && sudo apt upgrade -y
  sudo apt install git curl build-essential
  ```

- **Install Node.js:**

  To install Node.js (the best way is using `nvm`):

  ```bash
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

- **Install PM2:**

  ```bash
  sudo npm install -g pm2
  ```

- **Install Git:**

  ```bash
  sudo apt install git
  ```

</details>

### 2. Clone the Project and Install Dependencies

<details>
<summary>Click to expand</summary>

- **Clone the Git Repository:**

  ```bash
  git clone https://github.com/yourusername/yourrepo.git /var/www/NextJS-Portify
  ```

- **Navigate to the project directory:**

  ```bash
  cd /var/www/NextJS-Portify
  ```

- **Install the dependencies:**

  ```bash
  npm install
  ```

</details>

### 3. Start the Next.js Application

<details>
<summary>Click to expand</summary>

- **Start with PM2:**

  ```bash
  pm2 start npm --name "nextjs-app" -- run dev
  ```

- **Save PM2 processes (so they restart after a reboot):**

  ```bash
  pm2 save
  ```

</details>

### 4. (Optional) Configure Apache as a Reverse Proxy

<details>
<summary>Click to expand</summary>

- **Install Apache:**

  ```bash
  sudo apt install apache2
  ```

- **Enable Apache Modules:**

  ```bash
  sudo a2enmod proxy
  sudo a2enmod proxy_http
  sudo a2enmod ssl
  ```

- **Create an Apache site configuration:**

  ```bash
  sudo nano /etc/apache2/sites-available/000-default.conf
  ```

  Example configuration:

  ```apache
  <VirtualHost *:80>
      ServerName www.yourdomain.com
      DocumentRoot /var/www/NextJS-Portify

      ProxyPass / http://localhost:3001/
      ProxyPassReverse / http://localhost:3001/

      RewriteEngine On
      RewriteCond %{SERVER_NAME} =www.yourdomain.com
      RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
  </VirtualHost>

  <VirtualHost *:443>
      ServerName www.yourdomain.com
      DocumentRoot /var/www/NextJS-Portify

      ProxyPass / http://localhost:3001/
      ProxyPassReverse / http://localhost:3001/

      SSLEngine on
      SSLCertificateFile /path/to/certificate.crt
      SSLCertificateKeyFile /path/to/private.key
  </VirtualHost>
  ```

  ```bash
  sudo nano /etc/apache2/sites-available/000-default-le-ssl.conf
  ```

  Example configuration:

  ```apache
  <IfModule mod_ssl.c>
  <VirtualHost *:443>
    # Replace with your actual domain
    # ServerName and ServerAlias
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com

    # Replace with your Next.js app's directory
    # DocumentRoot
    DocumentRoot /var/www/NextJS-Portify

    # Use the correct paths for your SSL certificate and private key
    # SSL configuration
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/yourdomain.com/fullchain.pem  # Certificate path
    SSLCertificateKeyFile /etc/letsencrypt/live/yourdomain.com/privkey.pem  # Private key path
    Include /etc/letsencrypt/options-ssl-apache.conf  # SSL config from Let's Encrypt

    # Proxy requests to your Next.js app running on port 3001
    # Reverse Proxy
    ProxyPass / http://127.0.0.1:3001/
    ProxyPassReverse / http://127.0.0.1:3001/

    # Logs for errors and access
    # Error and access logs
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
  </VirtualHost>
  </IfModule>
  ```

- **Enable the site and restart Apache:**

  ```bash
  sudo a2ensite yourdomain.com.conf
  sudo systemctl restart apache2
  ```

</details>

### 5. Automate Updates with Cron (Optional)

<details>
<summary>Click to expand</summary>

To ensure that the Git repository is automatically updated, you can set up a cron job to run `git pull` every 10 minutes:

```bash
crontab -e
```

Add the following line to update every 10 minutes:

```bash
*/10 * * * * cd /var/www/NextJS-Portify && git pull origin main && pm2 restart nextjs-app
```

</details>

### 6. GitHub Webhook (Optional)

<details>
<summary>Click to expand</summary>

If you'd like to use GitHub webhooks to automatically update the repository, you need to set up an Express server to listen for `POST` requests.

- Create a `webhook-server.js` file with the following content:

  ```javascript
  const express = require('express');
  const exec = require('child_process').exec;

  const app = express();
  app.use(express.json());

  app.post('/deploy', (req, res) => {
      exec('cd /var/www/NextJS-Portify && git pull origin main && pm2 restart nextjs-app', (err, stdout, stderr) => {
          if (err) {
              res.status(500).send('Error: ' + err);
              return;
          }
          res.send('Deploy successful');
      });
  });

  app.listen(8080, () => {
      console.log('Webhook server running on http://localhost:8080');
  });
  ```

- Start the webhook server:

  ```bash
  node webhook-server.js
  ```

- **Allow the port in the firewall (if enabled):**

  ```bash
  sudo ufw allow 8080
  ```

- **Configure the webhook in GitHub:**

  - Add the URL of your webhook server (`http://your-server-ip:8080/deploy`) in the Webhook settings on GitHub.

</details>

### 7. Manually Update the Repository

<details>
<summary>Click to expand</summary>

If you want to manually update the repository, follow these steps:

1. **Navigate to the project directory:**

   ```bash
   cd /var/www/NextJS-Portify
   ```

2. **Run `git pull` to fetch the latest changes:**

   ```bash
   git pull origin main
   ```

3. **Install dependencies if needed:**

   ```bash
   npm install
   ```

4. **Restart the application:**

   ```bash
   pm2 restart nextjs-app
   ```

</details>
```
