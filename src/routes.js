import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import PortfolioStock from './components/portfolio/Stock.vue'
import Stocks from './components/stocks/Stocks.vue'
import StocksStock from './components/stocks/Stock.vue'
import Header from './components/Header.vue'

export const routes = [
  { path: '/', name: 'home', components: { default: Home, 'app-header': Header } },
  { path: '/porfolio', name: 'portfolio', component: Portfolio, children: [
    { path: '/stock', name: 'portfolioStock', component: PortfolioStock }
  ] },
  { path: '/stocks', name: 'stocks', component: Stocks, children: [
    { path: '/stock', name: 'stocksStock', component: StocksStock }
  ] }
]
