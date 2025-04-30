import { Routes } from "@angular/router";
import { StoreFrontLayoutComponent } from "./layouts/store-front-layout/store-front-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { GenderPagesComponent } from "./pages/gender-pages/gender-pages.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

export const storeFrontRoutes: Routes = [
    {
        path: '',
        component: StoreFrontLayoutComponent,
        children: [
            {
                path: '',
                component: HomePageComponent,
            },
            {
                path: 'gender/:gender',
                component: GenderPagesComponent,
            },
            {
                path: 'product/:idSlug',
                component: ProductPageComponent,
            },
            {
                path: '**',
                component: NotFoundPageComponent,
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
    },
    
]
export default storeFrontRoutes;