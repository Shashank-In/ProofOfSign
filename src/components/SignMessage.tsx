import { useState } from 'react';
import { useSignMessage } from 'wagmi';

export function SignMessage() {
    const { data: signMessageData, error, isPending, signMessage } = useSignMessage();
    const [msg, setMsg] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        signMessage({ message: msg });
    };

    return (
        <div className="card">
            <h2>Sign Message</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Enter message to sign"
                    className="input-field"
                />
                <button disabled={isPending} type="submit" className="btn-primary">
                    {isPending ? 'Check Wallet' : 'Sign Message'}
                </button>
            </form>

            {signMessageData && (
                <div className="result-box">
                    <h3>Signature:</h3>
                    <div className="code-block">{signMessageData}</div>
                </div>
            )}

            {error && (
                <div className="error-box">
                    <h3>Error:</h3>
                    <div>{error.message}</div>
                </div>
            )}
        </div>
    );
}
