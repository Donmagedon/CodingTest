# Clone Repository
- `git clone -b dev --single-branch https://github.com/Donmagedon/CodingTest`

# Trigger GitHub Actions
- Go to `/src/public/` and make any changes to the `index.html` file (e.g., change my name to yours in the `<h1>` element).
- On Git Bash, use the commands:
  - `git pull origin dev`
  - `git add .`
  - `git commit -m "<DESCRIPTION OF THE CHANGE MADE>"`

# Deployment
- Used Render hosting for the deployment.
- Create an account on Render.
- Make a new web service project.
- Connect to the GitHub repository: `https://github.com/Donmagedon/CodingTest`.
- Use the build command: `npm install`
- Use the start command: `node index.js`
- Go to Settings > API Key and create one.
- Save the API key in the GitHub repository secrets.
- Render will automatically host the app.
