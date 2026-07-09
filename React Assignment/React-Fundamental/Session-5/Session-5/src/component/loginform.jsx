import React, { useState } from 'react'

function LoginButton() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        alert(
            "Username: " + username + "\nPassword: " + password
        );
    }

    return (
        <div>
            <h1 className='text-3xl mt-5'>3. LoginForm Component</h1>

            <form onSubmit={handleSubmit} className='text-2xl mt-2'>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className='border-2'/>

                <br /><br />

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='border-2'/>

                <br /><br />

                <button type="submit" className='text-2xl border-2 pl-2 pr-2'>
                    Login
                </button>
            </form>

        </div>
    )
}

export default LoginButton;