# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d923cb59-09b8-4a20-b33e-ddec93537efd

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d923cb59-09b8-4a20-b33e-ddec93537efd) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d923cb59-09b8-4a20-b33e-ddec93537efd) and click on Share -> Publish.

## How to Test the Skill Blueprint Feature

To test the new Skill Blueprint feature:

1. Start the development server:
   ```sh
   npm run dev
   ```

2. Visit the test page at `/test-skill-blueprint`

3. Enter a profession (e.g., "Data Scientist") and click "View Career Blueprint"

4. The page will display an AI-generated career blueprint for that profession

## API Endpoints

### Netlify Function: `/api/forecast`

**Method**: POST
**Content-Type**: application/json

**Request Body**:
```json
{
  "userQuery": "Data Scientist"
}
```

**Response**:
```json
{
  "prediction": "# Career Blueprint Markdown...",
  "timestamp": "2023-06-15T10:30:00Z"
}
```

## Components

### SkillBlueprintPage

Located at `src/pages/SkillBlueprintPage.tsx`, this component:
- Fetches career blueprint data from the Netlify function
- Displays the data using ReactMarkdown for proper formatting
- Includes loading states and error handling
- Is accessible at `/skill-blueprint?profession=...`

### TestSkillBlueprint

Located at `src/pages/TestSkillBlueprint.tsx`, this component:
- Provides a simple form to test the skill blueprint feature
- Accessible at `/test-skill-blueprint`

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)