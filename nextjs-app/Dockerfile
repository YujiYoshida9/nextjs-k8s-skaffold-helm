# ---- Base image ----
FROM node:23-slim AS base
WORKDIR /app
RUN chown -R node:node /app
USER node

# ---- Dependencies ----
FROM base AS deps
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

# ---- Builder ----
FROM deps AS builder
COPY --chown=node:node . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Development ----
FROM base AS development
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node --from=deps /app/node_modules ./node_modules
COPY --chown=node:node . .
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---- Production ----
FROM node:23-slim AS production
WORKDIR /app
RUN chown -R node:node /app
USER node
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --chown=node:node --from=builder /app/.next ./.next
COPY --chown=node:node --from=builder /app/public ./public
COPY --chown=node:node --from=builder /app/next.config.ts ./
EXPOSE 3000
CMD ["npm", "start"]
