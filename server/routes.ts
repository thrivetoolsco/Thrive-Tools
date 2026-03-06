import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const mailtoBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;

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
        replyTo: email,
        subject: `[ThriveTools Contact] ${subject}`,
        text: mailtoBody,
      });

      res.json({ success: true });
    } catch (err) {
      console.log("Contact form submission:", { name, email, subject, message: message.substring(0, 100) });
      res.json({ success: true });
    }
  });

  return httpServer;
}
