FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Use Nginx to serve the frontend content
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
