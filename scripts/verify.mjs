import pg from 'pg';

const DATABASE_URL = 'postgresql://postgres.knywnqeowwjbbmwdhbqz:7GnVvkJnk9DHeaWb@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres';

const pool = new pg.Pool({ connectionString: DATABASE_URL, max: 1 });
const { rows } = await pool.query(`
  SELECT column_name, data_type, is_nullable, column_default
  FROM information_schema.columns
  WHERE table_name = 'bookings'
  ORDER BY ordinal_position
`);
console.table(rows);
await pool.end();
