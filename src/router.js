import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from "./components/Detail";
import Author from "./components/Author";
import Comment from "./components/Comment";

import None from "./components/404";

const routes = [
    {/*주소 입력 : 컴포넌트 보여줌*/
        path: "/",
        component: Home,
    },
    {/*주소 입력 : 컴포넌트 보여줌*/
        path: "/list",
        component: List,
    },
    {/*주소 입력 : 컴포넌트 보여줌*/
        path: "/detail/:id(\\d+)",
        component: Detail,
        children: [
            {
                path:"author",
                component: Author,
            },
            {
                path:"comment",
                component: Comment,
            }
        ]
    },
    {/*주소 입력 : 컴포넌트 보여줌*/
        path: "/:anything(.*)*",
        component: None,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;