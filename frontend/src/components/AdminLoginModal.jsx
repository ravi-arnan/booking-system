import React, { useState } from 'react';
import './AdminLoginModal.css';

const AdminLoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('http://localhost:3001/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });

            const data = await res.json();
            if (res.ok && data.success) {
                // Save login state
                localStorage.setItem('isAdminLoggedIn', 'true');
                onLoginSuccess();
            } else {
                setError(data.message || 'Invalid password');
            }
        } catch (err) {
            setError('Failed to connect to the server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-overlay" onClick={onClose}>
            <div className="admin-login-modal" onClick={e => e.stopPropagation()}>
                <button className="admin-login-close" onClick={onClose}>✕</button>
                <h2>Admin Login</h2>
                <p>Please enter the admin password to access the dashboard.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Admin Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                    />
                    {error && <div className="admin-login-error">{error}</div>}
                    <button type="submit" disabled={loading} className="admin-login-submit">
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginModal;
