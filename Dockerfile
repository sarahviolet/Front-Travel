# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Set up a simple server to serve the built React app
FROM node:14-alpine
WORKDIR /usr/src/app

# Copy only the built app from the previous stage
COPY --from=0 /usr/src/app/build ./build

# Install a simple HTTP server
RUN npm install -g serve

# Expose the port that the server will run on
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "build", "-l", "3000"]
