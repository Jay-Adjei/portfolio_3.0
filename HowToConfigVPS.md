
<details>
  <summary>### 1. Preparing the VPS</summary>

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


