import Home from './components/home/Home.vue';
import CreateAccount from './components/create-heroine/CreateHeroine.vue';
import CreateVillain from './components/create-villain/CreateVillain.vue';
import Game from './components/game/Game.vue';


export const routes = [
    { path:'', name:'home', component: Home, title: 'Home', menu: true },
    { path:'/createheroine', name:'createheroine', component: CreateAccount, title: 'New Heroine', menu: true },
    { path:'/createheroine/:id', name:'alteraheroine', component: CreateAccount, title: 'Alterar', menu: false },
    { path:'/createvillain', name:'createvillain', component: CreateVillain, title: 'New Villain', menu: true },
    { path:'/createvillain/:id', name:'alteravillain', component: CreateVillain, title: 'Alterar', menu: false },
    { path:'/game', name:'game', component: Game, title: 'Game', menu: true },
    { path:'*', component: Home, menu: false }
];
