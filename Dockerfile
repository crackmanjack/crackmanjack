# Use a recent Node.js image (replace "18" with the desired major version)
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app files
COPY . .

# Expose React app port (default: 3000)
EXPOSE 3000

# Start the React app (adjust command if needed)
# CMD [ "npm", "start" ]