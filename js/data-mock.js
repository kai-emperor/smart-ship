// 假数据生成器
const mockData = {
    ships: [
        { id: 'SH001', name: '海洋探索者', type: '货轮', status: '航行中' },
        { id: 'SH002', name: '深蓝号', type: '渔船', status: '停泊中' },
        { id: 'SH003', name: '东方明珠', type: '游轮', status: '航行中' }
    ],
    
    ports: [
        { id: 'PT01', name: '上海港', capacity: 1200 },
        { id: 'PT02', name: '宁波港', capacity: 900 }
    ],
    
    generateShipData: function() {
        return this.ships.map(ship => ({
            ...ship,
            position: {
                lat: 30.2 + Math.random() * 0.5,
                lng: 120.1 + Math.random() * 0.5
            }
        }));
    }
};

// AJAX模拟
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (settings.url.includes('/api/')) {
            const data = mockData[settings.data.type] || [];
            settings.success(data);
            return false;
        }
    }
});