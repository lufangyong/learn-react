import Loadable from 'react-loadable';
import LoadingComponent from '@/components/LoadingComponent';

// 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载，
const loadable = filename =>
  Loadable({
    loader: () => import(`@/views/${filename}`),
    loading: () => ''
  });

export default [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('@/views/Home'),
      loading: LoadingComponent
    })
  },
  {
    path: '/about',
    component: loadable('About')
  }
];
