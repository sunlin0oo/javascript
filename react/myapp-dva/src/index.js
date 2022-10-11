import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    history:require('history').createBrowserHistory()
    // history:require('history').createHashHistory() 
});

// 2. Plugins
// app.use({});

// 3. Model==>同步数据流处理方案
app.model(require('./models/maizuo').default);
// 根据需求建立不同的model
// app.model(require('./models/sunlin').default);
// app.model(require('./models/sunzifeng').default);

// 4. Router==>注册路由配置
app.router(require('./router').default);

// 5. Start
app.start('#root');
