import { Pool } from 'pg';

// PostgreSQL Session Pool 单例（端口 6543）
// Session Pool 适合服务端短连接写入操作

const globalPool = globalThis as unknown as { _pgPool?: Pool };

function getPool(): Pool {
  if (!globalPool._pgPool) {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error('DATABASE_URL 环境变量未设置');
    }

    globalPool._pgPool = new Pool({
      connectionString,
      max: 10,                // Session Pool 最大连接数
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    });

    // 日志连接错误但不崩溃
    globalPool._pgPool.on('error', (err) => {
      console.error('PostgreSQL Pool 异常:', err.message);
    });
  }
  return globalPool._pgPool;
}

export { getPool };
