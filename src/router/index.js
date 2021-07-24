import { TOKEN_NAME } from '@/config';
import tools from 'utils/tools';
import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('views/Home/index');
const Recom = () => import('views/Home/Recom');
const Mine = () => import('views/Home/Mine');
const Toplist = () => import('views/Toplist');
const List = () => import('views/List');
const Singer = () => import('views/Singer');
const Search = () => import('views/Search');
const Login = () => import('views/Login');
const Register = () => import('views/Register');
const NotFound = () => import('views/404');
const Account = () => import('views/Account');
const Collection = () => import('views/Collection');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/',
    children: [
      {
        path: '/',
        name: '/',
        component: Recom,
        meta: { index: 0 }
      },
      {
        path: '/recom',
        name: 'recom',
        component: Recom,
        meta: { index: 0 }
      },
      {
        path: '/mine',
        name: 'mine',
        component: Mine,
        meta: { index: 0 }
      }
    ]
  },
  {
    path: '/toplist',
    name: 'toplist',
    component: Toplist,
    meta: { index: 1 }
  },
  {
    path: '/list/:type/:id',
    name: 'list',
    component: List,
    meta: { index: 5 },
    props: true
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: { index: 4 },
    props: true
  },
  {
    path: '/singer',
    name: 'singer',
    component: Singer,
    meta: { index: 3 },
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { index: 0 }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { index: -1 }
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
    meta: { index: 10 }
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: { index: 2 }
  },
  {
    path: '/collection/songs',
    name: 'collection_songs',
    component: Collection,
    meta: { index: 4 }
  },
  {
    path: '/collection/recents',
    name: 'collection_recents',
    component: Collection,
    meta: { index: 4 }
  },
  {
    path: '/collection/artists',
    name: 'collection_artists',
    component: Collection,
    meta: { index: 4 }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(({ name }, from, next) => {
  const token = localStorage.getItem(TOKEN_NAME);
  // const permission = tools.decodeToken(token);

  switch (name) {
    case 'collection':
    case 'account':
      next();
      break;

    default:
      next();
      break;
  }
})

export default router
