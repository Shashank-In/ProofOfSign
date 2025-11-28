

export function HowToUse() {
    return (
        <div className="card">
            <h2>How to Use Proof of Sign</h2>
            <div className="guide-steps">
                <div className="step">
                    <h3>1. Connect Your Wallet</h3>
                    <p>Click the "Connect Wallet" button in the top right corner. We support MetaMask, Coinbase Wallet, and WalletConnect.</p>
                </div>
                <div className="step">
                    <h3>2. Sign a Message</h3>
                    <p>Enter any text message in the "Sign Message" box. Click "Sign" and approve the request in your wallet. This creates a cryptographic signature proving you own the address.</p>
                </div>
                <div className="step">
                    <h3>3. Verify a Signature</h3>
                    <p>To verify a signature, you need the original message, the signer's address, and the signature itself. Enter them in the "Verify Signature" box to check validity.</p>
                </div>
            </div>

            <div className="safety-section">
                <h3>Is it Safe?</h3>
                <p><strong>Yes, absolutely.</strong></p>
                <ul>
                    <li><strong>Client-Side Only:</strong> All signing and verification happens directly in your browser. Your private keys never leave your wallet.</li>
                    <li><strong>Open Source:</strong> This tool is transparent and does not store any of your data.</li>
                    <li><strong>No Gas Fees:</strong> Signing messages is free and does not require a transaction on the blockchain.</li>
                </ul>
            </div>
        </div>
    );
}
