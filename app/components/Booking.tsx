'use client';

import { useState, useCallback } from 'react';
import { bookingServices } from '@/app/data/content';
import Toast from '@/app/components/Toast';
import styles from './Booking.module.css';

export default function Booking() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [breed, setBreed] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00');

  const [submitting, setSubmitting] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const resetForm = useCallback(() => {
    setName('');
    setPhone('');
    setBreed('');
    setService('');
    setDate('');
    setTime('10:00');
  }, []);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setToastShow(true);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      showToast('请至少填写称呼和手机号码哦~ 🐾');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, breed, service, date, time }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        showToast('✅ 预约成功！我们会尽快联系您~');
        resetForm();
      } else {
        showToast(result.message || '提交失败，请稍后重试');
      }
    } catch {
      showToast('网络异常，请检查网络后重试');
    } finally {
      setSubmitting(false);
    }
  }, [name, phone, breed, service, date, time, resetForm, showToast]);

  return (
    <section id="booking">
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            给毛孩子<br />约一次精致洗护吧
          </h2>
          <p className={styles.desc}>
            填写信息后我们会尽快与您确认预约时间。首次到店享受 8 折优惠！
          </p>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📍</div>
            <span>上海市静安区毛孩子路 88 号</span>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📞</div>
            <span>400-888-PAWS</span>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>⏰</div>
            <span>周一至周日 9:00 - 20:00</span>
          </div>
        </div>
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>🐾 快速预约</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>您的姓名</label>
              <input
                type="text"
                placeholder="怎么称呼您？"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div className={styles.formGroup}>
              <label>手机号码</label>
              <input
                type="tel"
                placeholder="请输入手机号"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div className={styles.formGroup}>
              <label>毛孩子品种</label>
              <input
                type="text"
                placeholder="如：金毛、布偶猫、泰迪…"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div className={styles.formGroup}>
              <label>想选的服务</label>
              <select value={service} onChange={(e) => setService(e.target.value)} disabled={submitting}>
                <option value="">请选择服务</option>
                {bookingServices.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>期望日期</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div className={styles.formGroup}>
              <label>期望时间</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={submitting}
              />
            </div>
            <button className={styles.btnSubmit} type="submit" disabled={submitting}>
              {submitting ? '提交中...' : '提交预约 🎉'}
            </button>
          </form>
        </div>
      </div>
      <Toast message={toastMessage} show={toastShow} onClose={() => setToastShow(false)} />
    </section>
  );
}
