import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, ConnectButton, darkTheme } from '@rainbow-me/rainbowkit';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { config } from './wagmi';
import { Home } from './components/Home';
import { HowToUse } from './components/HowToUse';

const queryClient = new QueryClient();

function Navigation() {
    const location = useLocation();

    return (
        <nav className="main-nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/how-to-use" className={location.pathname === '/how-to-use' ? 'active' : ''}>How to Use</Link>
        </nav>
    );
}

function App() {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={darkTheme()}>
                    <HashRouter>
                        <div className="app-container">
                            <header className="app-header">
                                <div className="header-left">
                                    <div className="logo-container">
                                        <img src="logo.png" alt="Proof of Sign Logo" className="app-logo" />
                                        <h1>Proof of Sign</h1>
                                    </div>
                                    <Navigation />
                                </div>
                                <ConnectButton />
                            </header>

                            <main className="main-content">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/how-to-use" element={<HowToUse />} />
                                </Routes>
                            </main>

                            <footer className="app-footer">
                                <p>Built with Vite, Wagmi, and RainbowKit</p>
                            </footer>
                        </div>
                    </HashRouter>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default App;
