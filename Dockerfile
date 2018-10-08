# Stage 1 - the build process
FROM node:8.11.2 as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i --no-optional 
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]