# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig.json tsconfig.server.json ./
COPY prisma ./prisma/

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY server ./server
COPY src ./src
COPY vite.config.ts index.html ./

# Build
RUN npm run build

# Runtime stage
FROM node:18-alpine

WORKDIR /app

# Copiar package.json para dependencias de runtime
COPY package*.json ./
COPY prisma ./prisma/

# Instalar solo dependencias de producción
RUN npm ci --only=production && npm install -D prisma @prisma/client

# Copiar archivos buildados
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/dist-server ./dist-server

# Generar Prisma Client
RUN npx prisma generate

EXPOSE 3001 5173

CMD ["npm", "start"]
