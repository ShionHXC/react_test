import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
//如果浏览器没有自带intl，则需要在使用npm安装intl之后添加如下代码
import App from './App';




import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
        <App />,
     document.getElementById('root'));
registerServiceWorker();
