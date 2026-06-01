import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/app/lib/db';

// 表单字段校验
const VALID_SERVICES = ['', 'basic', 'spa', 'premium', '🛁 基础洗护 ¥128', '✨ 精致SPA ¥228', '👑 尊享全套 ¥388'];

interface BookingPayload {
  name: string;
  phone: string;
  breed?: string;
  service?: string;
  date?: string;
  time?: string;
}

function validate(payload: unknown): { valid: true; data: BookingPayload } | { valid: false; message: string } {
  if (!payload || typeof payload !== 'object') {
    return { valid: false, message: '请求体不能为空' };
  }

  const { name, phone, breed, service, date, time } = payload as Record<string, unknown>;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return { valid: false, message: '请填写铲屎官称呼' };
  }
  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return { valid: false, message: '请填写手机号码' };
  }
  if (breed !== undefined && typeof breed !== 'string') {
    return { valid: false, message: '品种格式不正确' };
  }
  if (service !== undefined && typeof service === 'string' && !VALID_SERVICES.includes(service)) {
    return { valid: false, message: '无效的服务类型' };
  }
  if (date !== undefined && typeof date === 'string' && date !== '' && isNaN(Date.parse(date))) {
    return { valid: false, message: '日期格式不正确' };
  }

  return {
    valid: true,
    data: {
      name: (name as string).trim(),
      phone: (phone as string).trim(),
      breed: breed ? (breed as string).trim() : undefined,
      service: service ? (service as string) : undefined,
      date: date ? (date as string) : undefined,
      time: time ? (time as string) : undefined,
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = validate(body);

    if (!result.valid) {
      return NextResponse.json({ success: false, message: result.message }, { status: 400 });
    }

    const { name, phone, breed, service, date, time } = result.data;

    const pool = getPool();
    const { rows } = await pool.query(
      `INSERT INTO bookings (name, phone, breed, service, date, time)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, name, phone, status, created_at`,
      [name, phone, breed ?? null, service ?? null, date ?? null, time ?? null]
    );

    return NextResponse.json(
      { success: true, data: rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('预约写入失败:', error);
    return NextResponse.json(
      { success: false, message: '服务器繁忙，请稍后再试' },
      { status: 500 }
    );
  }
}
