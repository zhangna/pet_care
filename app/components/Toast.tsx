'use client';

import { useEffect } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`${styles.toast} ${show ? styles.show : ''}`}>
      {message}
    </div>
  );
}
