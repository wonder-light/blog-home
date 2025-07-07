import loveData from './data.js';

/**
 * 首页动画
 */
export function loveAnimation() {
    // 获取元素
    let sun = document.getElementById('sun');
    let Moon = document.getElementById('Moon');
    // let hill1 = this.$refs.hill1
    // let hill2 = this.$refs.hill2
    // let earth = this.$refs.earth

    // 当前滚动高度
    let Y = window.scrollY;

    // 修改位置
    sun.style.top = 25 - Y * 0.05 + '%';
    Moon.style.top = 25 - Y * 0.05 + '%';
    sun.style.right = 30 + Y * 0.08 + '%';
    Moon.style.right = 30 + Y * 0.08 + '%';
    // hill1.style.bottom = -500 + Y * 0.6 + 'px'
    // hill2.style.bottom = -450 + Y * 0.6 + 'px'
    // earth.style.height = 20 + Y * 0.05 + '%'
}

/**
 * 主题修改
 */
export function changeTheme() {
    // 获取主题配置
    let theme = localStorage.getItem('theme');

    // 没有配置则初始化
    if (theme == null) {
        window.localStorage.setItem('theme', theme = 'white');
    }

    // 图标修改
    loveData.themeSelect = theme;

    // 循环修改配色
    const themes = loveData.themes[theme];
    for (let key in themes) {
        document.documentElement.style.setProperty(key, themes[key]);
    }
    console.log('theme', theme);
    console.log('sun', `sunlightOrMoon sun ${ theme === 'white' ? '' : 'sunOrMoonHide' }`);
    console.log('moon', `sunlightOrMoon moon ${ theme !== 'white' ? '' : 'sunOrMoonHide' }`);

    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    //设置太阳与月亮的显隐
    sun && (sun.className = `sunlightOrMoon sun ${ theme === 'white' ? '' : 'sunOrMoonHide' }`);
    moon && (moon.className = `sunlightOrMoon moon ${ theme !== 'white' ? '' : 'sunOrMoonHide' }`);
}

/**
 * 点击切换主题
 */
export function clickChangeTheme() {
    localStorage.setItem('theme', localStorage.getItem('theme') === 'white' ? 'dark' : 'white');
    changeTheme();
}

export function loveMain() {
    // 注册滚动事件
    document.addEventListener('scroll', loveAnimation, true);
    //注册修改主题的点击事件
    document.getElementById('sidebar').addEventListener('click', clickChangeTheme);
    // 主题修改
    changeTheme();
}

