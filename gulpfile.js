//https://blog.csdn.net/uijj556/article/details/118488773

const gulp = require('gulp');
const { series, dest, src, watch } = gulp;
/**
 * -----------------
 * css处理
 * -----------------
 */

    // sass处理
const sass = require('gulp-sass')(require('sass'));
// 合并 CSS、JavaScript
const concat = require('gulp-concat');
// css 前缀
const autoprefixer = require('gulp-autoprefixer');
// 压缩css
const cleanCSS = require('gulp-clean-css');

// 压缩图片
const imageMin = require('gulp-imagemin');

// 清理文件夹
const clean = require('gulp-clean');

//替换路径
const replace = require('gulp-replace');

/**
 * -----------------
 * ts/js处理
 * -----------------
 */

    // ts/js 转换
const babel = require('gulp-babel');
const rename = require('gulp-rename');
// 压缩js
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');

// 压缩html
const htmlMin = require('gulp-htmlmin');

const build = 'build';

// 清理dist目录
function cleanDist() {
    return src(`${ build }`)
    .pipe(clean());
    /*return src(`${ build }/!**!/!*`, { read: false })
    .pipe(clean({ force: true }))
    .pipe(dest(`${ build }`));*/
}

// 复制任务
function copyTask() {
    return src([
        'src/fonts/**/*',
    ]).pipe(dest(`${ build }/fonts`));
}

// 样式处理
function styleTask() {
    return src('css/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        add: true,
        remove: true
    }))
    .pipe(concat('index.css'))
    .pipe(cleanCSS(/*{ compatibility: 'ie8' }*/))
    .pipe(rename('index.min.css'))
    .pipe(dest(`css`));
}

// 图片压缩
function imageMinTask() {
    return src('src/img/**/*.{jpg,png,jpeg,gif}')
    .pipe(imageMin())
    .pipe(dest(`${ build }/img`));
}

// html处理
function htmlTask() {
    return src('src/index.html')
    .pipe(replace('index.scss', 'index.min.css'))
    .pipe(replace('index.js', 'index.min.js'))
    //.pipe(replace('module', 'application/javascript'))
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest(`${ build }`));
}

// ts处理
function jsTask() {
    return src(['js/*.js', '!js/*.min.js'])
    .pipe(babel({ // 编译es6语法
        presets: [
            ['@babel/preset-env']
        ],
        plugins: []
    }))
    .pipe(webpack({
        mode: 'production',
        output: {
            filename: 'main.js'
        }
    }))
    //.pipe(concat('index.min.js')) //合并所有js到main.js
    //.pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(dest(`js`));
}


module.exports.build = series(styleTask, jsTask);
//module.exports.build = series(cleanDist, copyTask, styleTask, imageMinTask, jsTask, htmlTask);
module.exports.watch = function () {
    watch(['css/*.scss', 'js/*.js', '!js/index.min.jd'], series(styleTask, jsTask));
};
