# Use official Node.js image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose port for the app
EXPOSE 3000

# Start the server
CMD ["npm", "start"]