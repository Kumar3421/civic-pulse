# Stage 1: Build
FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Run the build and list files for debugging in logs if needed
RUN npm run build && ls -R dist

# Stage 2: Serve
FROM nginx:stable-alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
ENV PORT 8080
CMD ["sh", "-c", "sed -i 's/listen 80;/listen '${PORT}';/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
