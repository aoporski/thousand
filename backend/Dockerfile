# Etap 1 – build
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev
COPY . .

# Etap 2 – produkcyjny obraz
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app .
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "src/server.js"]