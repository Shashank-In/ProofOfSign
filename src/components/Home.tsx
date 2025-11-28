import { SignMessage } from './SignMessage';
import { VerifySignature } from './VerifySignature';

export function Home() {
    return (
        <div className="home-container">
            <div className="hero-text">
                <h2>Securely Sign & Verify Ethereum Messages</h2>
                <p>
                    Proof of Sign is a simple, secure, and open-source tool to generate and verify cryptographic signatures using your Ethereum wallet.
                    Prove ownership of an address without spending gas.
                </p>
            </div>

            <div className="tools-grid">
                <SignMessage />
                <VerifySignature />
            </div>

            <div className="seo-content">
                <h3>Why use Proof of Sign?</h3>
                <p>
                    Cryptographic signatures are a powerful way to prove identity and ownership on the blockchain.
                    Whether you need to verify an address for a whitelist, prove you own a wallet to a service, or just test signing mechanics,
                    Proof of Sign provides a user-friendly interface for standard Ethereum message signing (EIP-191).
                </p>
            </div>
        </div>
    );
}
