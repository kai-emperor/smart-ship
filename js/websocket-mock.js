// WebSocket模拟器
const WebSocketMock = {
    send: function() {},
    onmessage: null,
    simulate: function(interval = 5000) {
        setInterval(() => {
            if (typeof this.onmessage === 'function') {
                this.onmessage({
                    data: JSON.stringify({
                        type: 'position-update',
                        shipId: 'SH001',
                        position: { 
                            lat: 30.2 + (Math.random() * 0.1), 
                            lng: 120.1 + (Math.random() * 0.1)
                        }
                    })
                });
            }
        }, interval);
    }
};

// 初始化模拟器
function initWebSocketMock() {
    const ws = new WebSocketMock();
    ws.onmessage = function(event) {
        const data = JSON.parse(event.data);
        console.log('收到WebSocket数据:', data);
        // 这里可以处理位置更新，更新地图标记等
    };
    ws.simulate();
}