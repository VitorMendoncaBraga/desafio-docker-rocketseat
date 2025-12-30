import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { env } from './env/schema.js';
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});