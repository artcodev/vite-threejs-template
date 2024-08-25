# Vite + Three.js Project Template by Art

This project is a 3D web application built with Vite and Three.js.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
* You have a Windows/Linux/Mac machine.

## Installing Vite + Three.js Project

To install the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```
   cd your-repo-name
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Using Vite + Three.js Project

To use the project, follow these steps:

1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and visit `http://localhost:5173`

## Deploying to Vercel

To deploy this project to Vercel using the Vercel CLI, follow these steps:

1. Install the Vercel CLI globally:
   ```
   npm install -g vercel
   ```

2. Navigate to your project directory (if you're not already there):
   ```
   cd path/to/your-project
   ```

3. Run the Vercel deployment command:
   ```
   vercel
   ```

4. If you haven't logged in to Vercel CLI before, you'll be prompted to do so. Follow the instructions to log in.

5. You'll be asked a series of questions about the project. Here are the recommended answers:
    - Set up and deploy: `Y`
    - Which scope do you want to deploy to: Select your preferred scope
    - Link to existing project: `N`
    - What's your project's name: `your-project-name`
    - In which directory is your code located: `./` (assuming you're in the project root)
    - Want to override the settings: `N`

6. Vercel will now deploy your project. Once completed, it will provide you with a URL where your site is live.

7. For subsequent deployments, you can simply run `vercel` in your project directory, and it will use the saved configuration.
