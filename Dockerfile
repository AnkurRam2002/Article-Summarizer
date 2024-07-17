FROM node:latest
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install the dependencies
RUN npm install
# Copy the app files
COPY . .
RUN npm run build
# Expose the port
EXPOSE 5173
# Run the app
CMD ["npm", "run", "dev"]