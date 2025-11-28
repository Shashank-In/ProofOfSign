import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Proof of Sign',
  projectId: 'YOUR_PROJECT_ID', // Replaced with a placeholder or public one if available, user needs their own for WalletConnect
  chains: [mainnet, sepolia],
  ssr: false, // If your dApp uses server side rendering (SSR)
});
