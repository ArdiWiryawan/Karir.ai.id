# Karir.ai.id 🤖
> **AI-Powered Career Forecasting & Skill Blueprint Generator**

[![Status](https://img.shields.io/badge/Status-Prototype-yellow?style=for-the-badge)](https://github.com/ArdiWiryawan/Karir.ai.id)
[![Stack](https://img.shields.io/badge/Stack-React_/_TypeScript_/_Vite-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Styling](https://img.shields.io/badge/Styling-Tailwind_CSS_/_shadcn--ui-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

Karir.ai.id is an AI-powered Career-Tech platform built to empower the next generation of Indonesian professionals. By combining predictive artificial intelligence with a modern, responsive web application, the platform generates comprehensive career forecasts and step-by-step learning roadmaps (Skill Blueprints) for any target profession.

---

## 🌟 Key Features

### 📈 1. Interactive Skill Blueprint Generator
- Generates tailored, structured career blueprints dynamically based on user-supplied professions.
- Accessible at `/skill-blueprint`, rendering markdown outputs using **ReactMarkdown** with proper heading hierarchies and inline checklists.
- Incorporates loading indicator screens and validation triggers.

### 🔌 2. Serverless API Integrations (Netlify Functions)
- Features a serverless endpoint at `/api/forecast` to handle processing queries securely.
- Manages dynamic queries and structures responses, outputting comprehensive prediction profiles containing:
  - Career path difficulty assessments.
  - Market demands and projected salary trends.
  - Interactive learning checkmarks.

### 🧪 3. Live Test Bed & Playground
- Includes a testing interface at `/test-skill-blueprint` to validate API responses in real-time.
- Supports validation of form elements, allowing developers and product teams to test model responses instantly.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18, TypeScript, Vite (build tool)
- **Styling & Components**: Tailwind CSS, shadcn-ui, Lucide Icons
- **Markdown Renderer**: ReactMarkdown
- **Backend Support**: Netlify Functions (Serverless Node.js endpoints)

---

## 📂 Project Structure
```text
Karir.ai.id/
├── api/
│   └── forecast.ts         # Netlify serverless function endpoint
├── src/
│   ├── components/         # Reusable UI components (buttons, input fields)
│   ├── pages/
│   │   ├── SkillBlueprintPage.tsx   # Core blueprint renderer
│   │   └── TestSkillBlueprint.tsx   # Live testing playground
│   ├── App.tsx             # Application router and layout config
│   └── main.tsx            # React root mount point
└── README.md               # Project documentation
```

---

## 🚀 Installation & Local Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArdiWiryawan/Karir.ai.id.git
   cd Karir.ai.id
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the local Vite dev server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Navigate to the local URL (usually `http://localhost:5173`) in your browser.
   - Test Page: `http://localhost:5173/test-skill-blueprint`
   - Blueprint Page: `http://localhost:5173/skill-blueprint?profession=Developer`

---

## 🧠 Technical Learnings
- **Markdown Parsing**: Handled sanitizing and rendering nested markdown strings inside React components safely.
- **Serverless API Design**: Structured serverless handler functions in TypeScript to manage POST requests, parse JSON bodies, and return CORS-compliant responses.

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).