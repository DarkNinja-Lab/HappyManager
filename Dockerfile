# 1. Basis-Image von Node.js verwenden
FROM node:18-alpine

# 2. Arbeitsverzeichnis in der Container-Umgebung
WORKDIR /app

# 3. Kopiere package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# 4. Installiere Abhängigkeiten
RUN npm install

# 5. Kopiere den gesamten Projektinhalt in das Arbeitsverzeichnis
COPY . .

# 6. Stelle sicher, dass dotenv genutzt wird
RUN npm install dotenv

# 7. Definiere den Startbefehl
CMD ["node", "bot.js"]

# 8. Exponiere den Port (falls dein Bot einen benötigt)
EXPOSE 3000
