//背景特效：樱花跑飘落
export function sakuraEffect() {
    const canvas = document.getElementById('sakura-id');
    const ctx = canvas.getContext('2d');
    
    //樱花图片
    let img = new Image();
    img.src = '/img/ice.png';
    let list = [];
    let snowsLen = 30;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    //监听窗口大小
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // 初始化100个雪花
    for (let i = 0; i < snowsLen; i++) {
        addSakura();
    }
    
    // 增加一个樱花
    function addSakura() {
        let speedY = Math.random() * 0.8 + 0.8;
        let maxY = speedY * Math.tan(Math.PI / 3);
        let minY = speedY * Math.tan(Math.PI / 6);
        let speedX = Math.random() * (maxY - minY) + minY;
        list.push({
            x: Math.random() * (canvas.width * 3),
            y: -1 * Math.random() * (canvas.height * 0.3),
            r: Math.random() * 0.5,
            s: Math.random() * 0.5 + 0.5,//缩放 [0.5, 1]
            speedX: -speedX,
            speedY: speedY,
        });
    }
    
    //画樱花
    function drawSakura() {
        // 清除
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let remove = [];
        list.forEach((e, index) => { // 雪花的位置变化
            e.x = e.x + e.speedX;
            e.y = e.y + e.speedY;
            e.r += 0.02;
            //当一朵雪花落地就新增一个雪花
            if (e.y >= canvas.height + 20 || e.x <= -20) {
                remove.push(index);
                addSakura();
            }
        });
        remove.forEach(index => list.splice(index, 1));
        list.forEach(e => {
            ctx.save();
            ctx.translate(e.x, e.y);
            ctx.rotate(e.r);
            ctx.drawImage(img, 0, 0, 30 * e.s, 30 * e.s);
            ctx.restore();
        });
        //window.requestAnimationFrame 与 requestAnimationFrame 相同
        window.requestAnimationFrame(drawSakura);
    }
    
    window.requestAnimationFrame(drawSakura);
}