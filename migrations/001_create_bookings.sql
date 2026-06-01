-- 创建预约表 (bookings)
-- 请在 Supabase SQL Editor 中执行此迁移

CREATE TABLE IF NOT EXISTS bookings (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        VARCHAR(100)   NOT NULL,
  phone       VARCHAR(20)    NOT NULL,
  breed       VARCHAR(100),
  service     VARCHAR(50),
  date        DATE,
  time        VARCHAR(10),
  status      VARCHAR(20)    NOT NULL DEFAULT 'pending',
  notes       TEXT,
  created_at  TIMESTAMPTZ    NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ
);

-- 状态值约束
ALTER TABLE bookings ADD CONSTRAINT chk_bookings_status
  CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed'));

-- 索引
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX idx_bookings_date ON bookings(date);

-- 启用 RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- 仅允许服务端写入（service_role 绕过 RLS）
CREATE POLICY "service_role_full_access" ON bookings
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);

-- 拒绝匿名用户所有操作
CREATE POLICY "anon_deny_all" ON bookings
  FOR ALL TO anon
  USING (false);

-- 拒绝已认证用户直接操作（全部走 API）
CREATE POLICY "authenticated_deny_all" ON bookings
  FOR ALL TO authenticated
  USING (false);

COMMENT ON TABLE bookings IS '预约表 - 存储用户在线预约信息';
COMMENT ON COLUMN bookings.name IS '铲屎官称呼';
COMMENT ON COLUMN bookings.phone IS '手机号码';
COMMENT ON COLUMN bookings.breed IS '毛孩子品种';
COMMENT ON COLUMN bookings.service IS '预约服务: basic/spa/premium';
COMMENT ON COLUMN bookings.status IS '预约状态: pending/confirmed/cancelled/completed';
