import { useState } from 'react';
import { verifyMessage } from 'viem';

export function VerifySignature() {
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [signature, setSignature] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setIsValid(null);

        try {
            const valid = await verifyMessage({
                address: address as `0x${string}`,
                message,
                signature: signature as `0x${string}`,
            });
            setIsValid(valid);
        } catch (err: any) {
            setError(err.message || 'Verification failed');
            setIsValid(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="card">
            <h2>Verify Signature</h2>
            <form onSubmit={handleVerify}>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="0x..."
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message content"
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Signature</label>
                    <textarea
                        value={signature}
                        onChange={(e) => setSignature(e.target.value)}
                        placeholder="0x..."
                        className="input-field"
                    />
                </div>
                <button disabled={isLoading} type="submit" className="btn-secondary">
                    {isLoading ? 'Verifying...' : 'Verify Signature'}
                </button>
            </form>

            {isValid !== null && (
                <div className={`result-box ${isValid ? 'valid' : 'invalid'}`}>
                    <h3>Result:</h3>
                    <div>{isValid ? '✅ Valid Signature' : '❌ Invalid Signature'}</div>
                </div>
            )}

            {error && (
                <div className="error-box">
                    <h3>Error:</h3>
                    <div>{error}</div>
                </div>
            )}
        </div>
    );
}
