import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

import styles from '../styles/Header.module.css';

import Auth from './Auth'; // 引入 Auth 组件

export default function Header() {
  const [showNewsBanner, setShowNewsBanner] = useState(true);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY
  //     setShowNewsBanner(scrollY < 50) // 滚动超过50px时隐藏新闻栏
  //   }

  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <span className={styles.logoText}>M</span>
              <div className={styles.logoGlow}></div>
            </div>
            <span className={styles.logoTitle}>Monad中文社区</span>
          </div>
          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <span>生态系统</span>
              <ChevronDown className={styles.navIcon} />
            </div>
            <div className={styles.navItem}>
              <span>开发者</span>
              <ChevronDown className={styles.navIcon} />
            </div>
            <div className={styles.navItem}>
              <span>资源</span>
              <ChevronDown className={styles.navIcon} />
            </div>
            <Auth /> {/* 使用 Auth 组件 */}
          </nav>
        </div>
      </div>
      {/* Floating News Banner */}
      {/* {showNewsBanner && (
        <div className={styles.floatingNewsBanner}>
          <div className={styles.newsSlider}>
            <div className={styles.newsSlide}>
              <span className={styles.newsBadge}>🔥 热门</span>
              <span className={styles.newsText}>Monad测试网即将上线！</span>
            </div>
            <div className={styles.newsSlide}>
              <span className={styles.newsBadge}>📢 公告</span>
              <span className={styles.newsText}>社区开发者大会报名开始</span>
            </div>
            <div className={styles.newsSlide}>
              <span className={styles.newsBadge}>⚡ 更新</span>
              <span className={styles.newsText}>新版本SDK已发布，性能提升50%</span>
            </div>
            <div className={styles.newsSlide}>
              <span className={styles.newsBadge}>🎉 活动</span>
              <span className={styles.newsText}>技术分享会本周五举行</span>
            </div>
          </div>
        </div>
      )} */}
    </header>
  );
}
