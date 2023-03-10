export default {
    /**
     * @type{ "white" | "dark" }
     */
    themeSelect: "white",
    // 主题
    themes: {
        white: {
            // 背景颜色
            "--bgColor": "#ffa55cff",
            // 第一屏背景颜色
            "--firstBgColor": "linear-gradient(to top, #ffa55c, #ff9f31)",
            // 山颜色
            "--hillColor1": "#733136",
            "--hillColor2": "#83373b",
            "--hillColor3": "#a24850",
            "--hillColor4": "#dd666b",
            // 大地颜色
            "--earth": "linear-gradient(to top right, #ca7075, #7e3235)",
            // 小草颜色
            "--cao": "linear-gradient(to top, #ca7075, #7e3235)",
            // 标题文字颜色
            "--titleColor": "#ff4520",
            // 标题文字阴影
            "--titleShadow": "2px 2px 0px #ffffffcc, 0 0 10px #0000007f",
            // 图标菜单阴影
            "--iconShadow": "0 0 5px white",
        },
        dark: {
            // 背景颜色
            "--bgColor": "#30255f",
            // 第一屏背景颜色
            "--firstBgColor": "linear-gradient(to top, #4e2458, #0d1233)",
            // 山颜色
            "--hillColor1": "#24204a",
            "--hillColor2": "#29235e",
            "--hillColor3": "#412547",
            "--hillColor4": "#57325f",
            // 大地颜色
            "--earth": "linear-gradient(to top right, rgb(43, 38, 95), rgb(61, 36, 95))",
            // 小草颜色
            "--cao": "linear-gradient(to top, #2b265f, #4e4880)",
            // 标题文字颜色
            "--titleColor": "#8841a7",
            // 标题文字阴影
            "--titleShadow": "2px 2px 0px #ffffffcc, 0 0 10px #0000007f",
            // 图标菜单阴影
            "--iconShadow": "0 0 2px white",
        }
    },
}