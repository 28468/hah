import dva from 'dva';
// 引入全局样式
import './index.css';
// 引入antd样式
import {message} from 'antd';
import 'antd/dist/antd.css';
import createLoading from 'dva-loading';
import {createLogger} from 'redux-logger';

// 1. Initialize
const app = dva(createLoading());

// 2. Plugins
app.use({
  // onAction: createLogger(),
  onError: (e)=>{
    message.error(e.message, /* duration */3);
  }
});

// 3. Model
app.model(require('./models/login').default);
app.model(require('./models/questions').default);
app.model(require('./models/global').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
