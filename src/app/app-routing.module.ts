import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaasHomeComponent } from './components/pages/saas-home/saas-home.component';
import { MarketingHomeComponent } from './components/pages/marketing-home/marketing-home.component';
import { StartupHomeComponent } from './components/pages/startup-home/startup-home.component';
import { SeoAgencyHomeComponent } from './components/pages/seo-agency-home/seo-agency-home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ProductsListComponent } from './components/pages/products-list/products-list.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ListNewsComponent } from './components/pages/list-news/ListNews.component';
import { News1Component } from './components/pages/list-news/ListNews.component';
import { News2Component } from './components/pages/list-news/ListNews.component';
import { News3Component } from './components/pages/list-news/ListNews.component';
import { News4Component } from './components/pages/list-news/ListNews.component';
import { News5Component } from './components/pages/list-news/ListNews.component';
import { News6Component } from './components/pages/list-news/ListNews.component';
import { FormComponent } from './components/pages/list-news/ListNews.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { AboutComponent } from './components/pages/about/about.component';

// LOW IMPORT
import { LowtahunComponent } from './components/pages/low/lowtahun.component';
import { Kategori24Component } from './components/pages/low/2024/kategori/kategori24.component';
import { Jenjangofl24Component } from './components/pages/low/2024/jenjangofl/jenjangofl24.component';
import { Jenjangonl24Component } from './components/pages/low/2024/jenjangonl/jenjangonl24.component';
import { Kategori23Component } from './components/pages/low/2023/kategori/kategori23.component';
import { Jenjangofl23Component } from './components/pages/low/2023/jenjangofl/jenjangofl23.component';
import { Jenjangonl23Component } from './components/pages/low/2023/jenjangonl/jenjangonl23.component';


const routes: Routes = [
    {path: '', component: SaasHomeComponent},
    {path: 'marketing', component: MarketingHomeComponent},
    {path: 'startup', component: StartupHomeComponent},
    {path: 'seo-agency', component: SeoAgencyHomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'team', component: TeamComponent},
    {path: 'faq', component: FaqComponent},

    // LOW
    {path: 'lowtahun', component: LowtahunComponent},
    // LOW 2024
    {path: 'kategori24', component: Kategori24Component},
    {path: 'jenjangofl24', component: Jenjangofl24Component},
    {path: 'jenjangonl24', component: Jenjangonl24Component},
    // LOW 2024
    {path: 'kategori23', component: Kategori23Component},
    {path: 'jenjangofl23', component: Jenjangofl23Component},
    {path: 'jenjangonl23', component: Jenjangonl23Component},


    {path: 'ListNews', component: ListNewsComponent},
    {path: 'News1', component: News1Component},
    {path: 'News2', component: News2Component},
    {path: 'News3', component: News3Component},
    {path: 'News4', component: News4Component},
    {path: 'News5', component: News5Component},
    {path: 'News6', component: News6Component},
    {path: 'Form', component: FormComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'products-list', component: ProductsListComponent},
    {path: 'products-details', component: ProductsDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}