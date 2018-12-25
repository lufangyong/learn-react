import RouterConfig from './modules'; // 引入业务逻辑模块
import CommonRouters from './common'; // 引入通用模块

export default [...RouterConfig.concat(CommonRouters)];
