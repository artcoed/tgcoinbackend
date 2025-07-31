FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["sh", "-c", "ls -la /app/.gmrc /app/migrations && npm run migrate && node dist/index.js"]