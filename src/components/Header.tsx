import { ChevronDown, Menu as MenuIcon } from 'lucide-react';
import { Image, Drawer } from 'antd';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { Dropdown, Menu } from 'antd';
import Auth from './Auth';
import { useState, useMemo } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 使用 useMemo 确保 Auth 组件只创建一次，避免重复渲染
  const authComponent = useMemo(() => <Auth />, []);
  
  // const [showNewsBanner, setShowNewsBanner] = useState(true);
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
          <Link href="/" passHref>
            <div className={styles.logoInfo} style={{ cursor: 'pointer' }}>
              <Image preview={false} width={30} src="/logo.png" className={styles.logo} />
              <span className={styles.logoTitle}>Monad 中文社区</span>
            </div>
          </Link>
          <nav className={styles.nav}>
            <Dropdown
              menu={{
                items: [
                  { key: 'projects', label: <Link href="/community">社区项目</Link> },
                  { key: 'tools', label: <Link href="/">开发工具</Link> },
                  { key: 'explorer', label: <Link href="https://testnet.monadexplorer.com" target='_blank'>区块浏览器</Link> },
                ],
              }}
              placement="bottom"
              trigger={['hover']}
            >
              <div className={styles.navItem}>
                <span>生态系统</span>
                <ChevronDown className={styles.navIcon} />
              </div>
            </Dropdown>
            <Dropdown
              menu={{
                items: [
                  { key: 'docs', label: <Link href="/">开发文档</Link> },
                  { key: 'examples', label: <Link href="/">示例代码</Link> },
                  { key: 'sdk', label: <Link href="/">SDK 工具</Link> },
                ],
              }}
              placement="bottom"
              trigger={['hover']}
            >
              <div className={styles.navItem}>
                <span>开发者</span>
                <ChevronDown className={styles.navIcon} />
              </div>
            </Dropdown>
            <Dropdown
              menu={{
                items: [
                  { key: 'blog', label: <Link href="/blogs">博客</Link> },
                  { key: 'events', label: <Link href="/events">活动</Link> },
                  { key: 'faq', label: <Link href="/">常见问题</Link> },
                ],
              }}
              placement="bottom"
              trigger={['hover']}
            >
              <div className={styles.navItem}>
                <span>资源</span>
                <ChevronDown className={styles.navIcon} />
              </div>
            </Dropdown>

            {authComponent}
          </nav>
          
          {/* 移动端导航 */}
          <div className={styles.mobileNav}>
            {authComponent}
            <button 
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon className={styles.mobileMenuIcon} />
            </button>
          </div>
        </div>
      </div>
      
      {/* 移动端菜单抽屉 */}
      <Drawer
        title={
          <div style={{ 
            background: 'linear-gradient(135deg, #1f2937, #6E54FF)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>
            导航菜单
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
        styles={{
          body: { padding: '1.5rem 1rem' },
          header: { borderBottom: '1px solid #f3f4f6', paddingBottom: '1rem' }
        }}
      >
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuSection}>
            <h3 className={styles.mobileMenuSectionTitle}>生态系统</h3>
            <div className={styles.mobileMenuLinks}>
              <Link href="/community" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                <span>🏗️</span>
                <span>社区项目</span>
              </Link>
              <Link href="/" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                <span>🛠️</span>
                <span>开发工具</span>
              </Link>
              <Link href="https://testnet.monadexplorer.com" target='_blank' className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                <span>🔍</span>
                <span>区块浏览器</span>
              </Link>
            </div>
          </div>
          
          <div className={styles.mobileMenuSection}>
            <h3 className={styles.mobileMenuSectionTitle}>开发者</h3>
            <div className={styles.mobileMenuLinks}>
              <Link href="/" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                <span>📖</span>
                <span>开发文档</span>
              </Link>
              <Link href="/" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                <span>💻</span>
                <span>示例代码</span>
              </Link>
              <Link href="/" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                <span>⚙️</span>
                <span>SDK 工具</span>
              </Link>
            </div>
          </div>
          
          <div className={styles.mobileMenuSection}>
            <h3 className={styles.mobileMenuSectionTitle}>资源</h3>
            <div className={styles.mobileMenuLinks}>
              <Link href="/blogs" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                <span>📝</span>
                <span>博客</span>
              </Link>
              <Link href="/events" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                <span>🎉</span>
                <span>活动</span>
              </Link>
              <Link href="/" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                <span>❓</span>
                <span>常见问题</span>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
      {/* Floating News Banner */}
      {/* {showNewsBanner && (
        <div className={styles.floatingNewsBanner}>
          <div className={styles.newsSlider}>
            <div className={styles.newsSlide}>
              <span className={styles.newsBadge}>🔥 热门</span>
              <span className={styles.newsText}>Monad测试网即将上线！</span>
            </div>
          </div>
        </div>
      )} */}
    </header>
  );
}
