import Home from './components/home/Home.vue';
import CreateAccount from './components/create-heroine/CreateHeroine.vue';
import CreateVillain from './components/create-villain/CreateVillain.vue';
import Game from './components/game/Game.vue';
import Heroines from './components/heroines/Heroines.vue'
import Villains from './components/villains/Villains.vue'

export const routes = [
    { path:'', name:'home', component: Home, title: 'Home', menu: true },
    { path:'/heroines', name:'heroines', component: Heroines, title: 'Eco-Heroines', menu: true },
    { path:'/villains', name:'villains', component: Villains, title: 'Villains', menu: true },
    { path:'/game', name:'game', component: Game, title: 'GAME', menu: true },
    { path:'/createheroine', name:'createheroine', component: CreateAccount, title: 'New Heroine', menu: true },
    { path:'/createheroine/:id', name:'alteraheroine', component: CreateAccount, title: 'Alterar', menu: false },
    { path:'/createvillain', name:'createvillain', component: CreateVillain, title: 'New Villain', menu: true },
    { path:'/createvillain/:id', name:'alteravillain', component: CreateVillain, title: 'Alterar', menu: false },
    { path:'*', component: Home, menu: false }
];
