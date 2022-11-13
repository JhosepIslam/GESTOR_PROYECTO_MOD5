FROM node:16.15.0
WORKDIR /app 
COPY package*.json ./
RUN npm install --save-dev @babel/core @babel/node @babel/node
COPY . .
EXPOSE 7000
CMD ["node","index.js"]
