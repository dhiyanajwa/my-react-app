import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ChatGroq } from '@langchain/groq';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { HumanMessage, AIMessage } from '@langchain/core/messages';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ── Resume context (injected into the system prompt) ──────────────────────────
const RESUME_CONTEXT = `
You are a friendly and professional AI assistant for a resume portfolio website.
You help visitors learn about the following candidates. Answer questions based ONLY on the data below.
If asked about something not in the resume data, politely say you can only answer resume-related questions.
Keep answers concise (2-4 sentences) unless the user asks for detail.

=== CANDIDATE 1 ===
Name: DHIYA NAJWA ATMA BINTI DRAHMAN
Title: Aspiring Software Intern
Email: dhiyanajwaatma1227@gmail.com
LinkedIn: linkedin.com/in/dhiyanajwaatma
Location: Sarawak, Malaysia
Phone: 011-2506 1317

Objective: Reliable and adaptable Computer Science (Multimedia Computing) student seeking skills in programming, troubleshooting, and system management. Proficient in English with strong communication skills, able to work under pressure, manage multiple tasks efficiently, and committed to continuous learning in the technology field.

Education:
- University of Malaysia Sarawak (2023 - Present): Degree in Computer Science (Multimedia Computing) with Hons. Current CGPA: 3.40, Dean's List: 24/25-2 & 25/26-1
- SMK Bandar (2021 - 2023): STPM. MUET Band 4.0, Subjects: Pengajian Am, Chemistry, Biology, Maths T
- SMK Kemena (2016 - 2021): SPM. Achieved 4A

Projects:
- Hang Lucky - Top Down Pixel 2D (Oct 2025 - Jan 2026): Produced game storyline inspired by historical events during British invasion in 16th century. Designed game layout using tilemaps and finished 1 week earlier. Tech: Game Design, Tilemaps, 2D Pixel Art
- TheMinums - Dynamic WebApp for E-Commerce (Nov 2025 - Jan 2026): Developed website for The Minum's, cafe based in UNIMAS. Integrated with Firebase Console as database for admin side. Tech: Web Development, Firebase

Skills:
- Technical: Python, Java, HTML, CSS, JavaScript, C++, PHP, SQL, Figma
- Soft: Problem-solving, Communication, Teamwork, Adaptability

=== CANDIDATE 2 ===
Name: JASON ONG LEE CHANG
Title: Computer Science Intern
Email: jaxonong04@gmail.com
LinkedIn: linkedin.com/in/jaxonong04
Location: Sarawak, Malaysia
Phone: 011-1085 0911

Objective: Passionate Computer Science student specializing in Multimedia Computing. Eager to apply skills in UI/UX design, web application development, and object-oriented programming to solve real-world problems and contribute to innovative tech teams.

Education:
- UNIVERSITI MALAYSIA SARAWAK (UNIMAS) (Oct 2023 - Present): Bachelor's Degree in Computer Science (Multimedia Computing) with Honours
- KOLEJ MATRIKULASI SARAWAK (KMSw) (Jul 2022 - May 2023): Physical Science

Projects:
- Shopee UI/UX Redesign (2024): Designed comprehensive user interfaces and experiences in Figma. Focused on user journey mapping and accessible design principles. Tech: Figma, UI/UX, Prototyping
- Portfolio Web Application (2024): Developed a responsive personal portfolio using modern web technologies. Deployed via Vercel for continuous integration and hosting. Tech: Web Development, React, Deployment

Skills:
- Technical: React, HTML/CSS, JavaScript, UI/UX Design, Figma, Object Oriented Programming
- Languages: English, Chinese, Malay
`;

// ── LangChain setup ───────────────────────────────────────────────────────────
const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: 'llama-3.3-70b-versatile',
    temperature: 0.4,
    maxTokens: 512,
});

const prompt = ChatPromptTemplate.fromMessages([
    ['system', RESUME_CONTEXT],
    new MessagesPlaceholder('history'),
    ['human', '{input}'],
]);

const chain = prompt.pipe(model);

// ── API endpoint ──────────────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
    try {
        const { message, history = [] } = req.body;

        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Message is required.' });
        }

        // Convert plain history array into LangChain message objects
        const chatHistory = history.map((msg) =>
            msg.role === 'user'
                ? new HumanMessage(msg.content)
                : new AIMessage(msg.content)
        );

        const response = await chain.invoke({
            input: message,
            history: chatHistory,
        });

        res.json({ reply: response.content });
    } catch (err) {
        console.error('Chat error:', err);
        res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
});

// ── Start server ──────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`✅ AI backend running on http://localhost:${PORT}`);
});
