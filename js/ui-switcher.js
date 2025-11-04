// 初始化UI切换器
function initThemeSwitcher() {
    // 从cookie加载保存的主题
    const savedTheme = $.cookie('ui_theme') || '1';
    applyTheme(savedTheme);
    
    // 绑定切换按钮事件
    $('.ui-switcher button').click(function() {
        const theme = $(this).data('theme');
        $.cookie('ui_theme', theme, { expires: 7 });
        applyTheme(theme);
        
        // 更新按钮状态
        $('.ui-switcher button').removeClass('active');
        $(this).addClass('active');
    });
}

// 应用主题
function applyTheme(theme) {
    // 更新CSS链接
    $('link[data-theme]').attr('href', `css/ui-theme${theme}.css`);
    
    // 更新页面布局（示例）
    if (theme === '1') {
        // 蓝色海洋风布局调整
        $('.metric-card').css('box-shadow', '0 0 10px rgba(0, 119, 255, 0.3)');
    } else {
        // 深空科技感布局调整
        $('.metric-card').css('box-shadow', '0 0 10px rgba(255, 64, 129, 0.3)');
    }
    
    // 通知所有页面更新主题
    window.parent.postMessage({
        type: 'theme-change',
        theme: theme
    }, '*');
}

// 监听来自其他页面的主题变更消息
window.addEventListener('message', function(event) {
    if (event.data.type === 'theme-change') {
        applyTheme(event.data.theme);
    }
});