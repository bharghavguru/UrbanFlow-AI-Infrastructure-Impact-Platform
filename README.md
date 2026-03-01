**UrbanFlow — AI Infrastructure Impact Intelligence Platform**

UrbanFlow is an AI-powered decision intelligence platform that evaluates infrastructure proposals and transforms them into structured, multi-dimensional impact insights through an interactive policy dashboard.
The platform is designed to support policymakers, urban planners, and decision-makers by converting qualitative infrastructure proposals into quantifiable impact assessments.

**Problem**

Infrastructure decisions are often based on fragmented data, subjective reasoning, or manual review processes. There is no unified system that translates proposal text into structured evaluation across economic, environmental, governance, and risk dimensions.

****Solution****

**UrbanFlow uses AI to:**

Analyze infrastructure proposals
Quantify impact across multiple dimensions (0–100 scoring)
Generate an Overall Infrastructure Impact Index
Present results through a structured, interactive dashboard
The system transforms unstructured policy language into measurable decision intelligence.

**Core Features**
Multi-dimensional impact scoring
Economic impact analysis
Environmental sustainability evaluation
Governance and transparency assessment
Risk index calculation
Executive summary generation
Interactive dashboard visualizations

**System Architecture**
UrbanFlow is built as a full-stack web application.

**Frontend**
React
TypeScript
Tailwind CSS
Chart-based data visualization

**Backend**
Python
Flask
REST API architecture

**AI Integration**
Featherless AI API
DeepSeek-V3.2 model

**Workflow:**

User submits an infrastructure proposal.
Backend constructs a structured evaluation prompt.
The AI model generates quantified impact scores in JSON format.
The frontend renders the results into an interactive analytical dashboard.

**Technologies Used**

React
TypeScript
Python
Flask
Tailwind CSS
Recharts / Chart.js
Featherless AI (DeepSeek model)
Node.js
Git & GitHub

**Running the Project Locally**
Backend
cd backend
pip install -r requirements.txt

**Create a .env file:**

FEATHERLESS_API_KEY=your_api_key_here

**Run:**
python app.py
Frontend
cd frontend
npm install
npm run dev

**Future Scope**
Regional infrastructure benchmarking
Budget simulation modeling
Historical impact comparison
Cloud deployment
Expanded decision-support analytics
