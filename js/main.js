/*
 * @Author: 谢凯 xiekai@chinalltrade.com
 * @Date: 2025-09-16 16:57:42
 * @LastEditors: 谢凯 xiekai@chinalltrade.com
 * @LastEditTime: 2025-09-16 16:57:49
 * @FilePath: \smart-ship-dashboard\js\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
$(document).ready(function() {
    // 初始化UI切换
    initThemeSwitcher();
    
    // 初始化WebSocket模拟
    initWebSocketMock();
    
    // 加载页面时获取假数据
    loadMockData();
});

function loadMockData() {
    // 模拟AJAX请求获取船舶数据
    $.ajax({
        url: '/api/ships',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('获取到船舶数据:', data);
            // 这里可以处理数据并更新页面
        },
        error: function() {
            console.error('数据加载失败');
        }
    });
}