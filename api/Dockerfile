#DockerFile - this is the container build instructions

# api/Dockerfile
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# 1. Copy package.json first to cache npm install layers
COPY package*.json ./ 
RUN npm install

# 2. Specifically copy the server entry point file
# This guarantees server.js is exactly in the root of the WORKDIR
COPY server.js . 

# 3. Copy other supporting files (if any are added later)
# COPY . . 

EXPOSE 8080

CMD ["npm", "start"] 
