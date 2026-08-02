import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Protocol Finder quiz email signups
export const protocolSignups = pgTable("protocol_signups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  concern: text("concern").notNull(),   // e.g. "sleep", "gut", "energy"
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertProtocolSignupSchema = createInsertSchema(protocolSignups).pick({
  email: true,
  concern: true,
});

export type InsertProtocolSignup = z.infer<typeof insertProtocolSignupSchema>;
