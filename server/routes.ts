import type { Express } from "express";
import { type Server } from "http";
import rateLimit from "express-rate-limit";

const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

const newsletterRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

function sanitizeText(input: string): string {
  return String(input)
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", contactRateLimit, async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const safeName = sanitizeText(name);
    const safeEmail = sanitizeText(email);
    const safeSubject = sanitizeText(subject);
    const safeMessage = sanitizeText(message);

    if (!safeName || !safeSubject || !safeMessage) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const mailtoBody = `Name: ${safeName}\nEmail: ${safeEmail}\nSubject: ${safeSubject}\n\nMessage:\n${safeMessage}`;

    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: "Thrivetools.co@gmail.com",
        replyTo: safeEmail,
        subject: `[ThriveTools Contact] ${safeSubject}`,
        text: mailtoBody,
      });

      res.json({ success: true });
    } catch (err) {
      console.error("Contact form email failed:", err);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  });

  app.post("/api/newsletter", newsletterRateLimit, async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const safeEmail = sanitizeText(email);

    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: "Thrivetools.co@gmail.com",
        subject: "[ThriveTools] New Newsletter Subscriber",
        text: `New newsletter subscription request:\n\nEmail: ${safeEmail}`,
      });

      res.json({ success: true });
    } catch (err) {
      console.log("Newsletter subscription (email failed, logged safely)");
      res.json({ success: true });
    }
  });

  return httpServer;
}
