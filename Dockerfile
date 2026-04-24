# Build stage
FROM node:22-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["sh", "-c", "sed -i 's/listen 80;/listen '${PORT:-8080}';/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
