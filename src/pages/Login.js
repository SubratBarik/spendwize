import React from 'react';

function Login() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card p-4 shadow" style={{ minWidth: '400px', border: '1px solid #ced4da' }}>
                    <h2 className="mb-4 text-center">SpendWize</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-3">LOGIN</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
