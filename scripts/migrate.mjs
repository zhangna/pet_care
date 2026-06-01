import { readFileSync } from 'fs';
import pg from 'pg';

const DATABASE_URL = 'postgresql://postgres.knywnqeowwjbbmwdhbqz:7GnVvkJnk9DHeaWb@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres';

const sql = readFileSync('migrations/001_create_bookings.sql', 'utf-8');

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
  max: 1,
  idleTimeoutMillis: 10_000,
  connectionTimeoutMillis: 10_000,
});

try {
  await pool.query(sql);
  console.log('✅ 迁移执行成功 — bookings 表已创建');
} catch (err) {
  console.error('❌ 迁移失败:', err.message);
  process.exit(1);
} finally {
  await pool.end();
}
