import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },*/
  {
    path: '',
    loadChildren: () => import('./src/app/pages/splash/splash.module').then( m => m.SplashPageModule),
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./src/app/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./src/app/pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./src/app/pages/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./src/app/pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'logistics',
    loadChildren: () => import('./src/app/pages/logistics/logistics.module').then( m => m.LogisticsPageModule)
  },
  {
    path: 'pricing',
    loadChildren: () => import('./src/app/pages/pricing/pricing.module').then( m => m.PricingPageModule)
  },
  {
    path: 'suggestion',
    loadChildren: () => import('./src/app/pages/suggestion/suggestion.module').then( m => m.SuggestionPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./src/app/pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./src/app/pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./src/app/pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'dailymarket',
    loadChildren: () => import('./src/app/dailymarket/dailymarket.module').then( m => m.DailymarketPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./src/app/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./src/app/market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./src/app/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./src/app/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'payment/:paymentLink',
    loadChildren: () => import('./src/app/payment/payment.module').then( m => m.PaymentPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
