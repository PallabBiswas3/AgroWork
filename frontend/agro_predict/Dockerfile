# Step 1: Build the React/Vite app
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the build using a lightweight Node server
FROM node:20-alpine
WORKDIR /app
RUN npm install express
COPY --from=build /app/dist ./dist

# Simple server
COPY server.js .

ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
