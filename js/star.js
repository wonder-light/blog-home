export function generateStar() {
  let el = document.getElementById('galaxy');
  for (let i = 0; i < 300; i++) {
    let node = document.createElement('div');
    node.classList.add('star');
    el.appendChild(node);
  }
}

/**
 * 主题修改
 */
function changeTheme() {
  // 获取主题配置
  let theme = localStorage.getItem('bg-theme');
  // 没有配置则初始化
  if (theme == null) {
    localStorage.setItem('bg-theme', theme = 'default');
  }
  console.log('theme', theme ?? 'default');
  if (theme === 'star') {
    document.getElementById('star-theme').style.display = 'inherit';
    document.getElementById('default-theme').style.display = 'none';
    document.documentElement.setAttribute('theme', 'star');
  } else {
    document.getElementById('star-theme').style.display = 'none';
    document.getElementById('default-theme').style.display = 'inherit';
  }
}

function clickChange() {
  localStorage.setItem('bg-theme', localStorage.getItem('bg-theme') === 'star' ? 'default' : 'star');
  changeTheme();
}

export function starMain() {
  generateStar();
  //注册修改主题的点击事件
  document.getElementById('switch-theme').addEventListener('click', clickChange);
  // 主题修改
  changeTheme();
}
