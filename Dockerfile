# --- Stage 1: Builder ---
FROM node:22-alpine AS builder
WORKDIR /app
# Copy only dependency files first to leverage Docker layer caching
COPY package*.json ./
RUN npm install
# Copy the rest of the source code
COPY . .

# --- Stage 2: Production ---
FROM node:22-alpine AS production
# Set environment to production to optimize Node.js performance
ENV NODE_ENV=production
WORKDIR /app
# Only copy production dependencies from the builder
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
# Copy only the necessary application file(s)
COPY --from=builder /app/index.js ./

# Run as a non-root user for security (UID 1000 is the default 'node' user)
USER 1000
EXPOSE 8080

# Execute Node directly (bypassing npm start) for better signal handling
CMD ["node", "index.js"]
