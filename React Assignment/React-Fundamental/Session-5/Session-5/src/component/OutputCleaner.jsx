import { useState } from "react";

function FormCleaner() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "" || password === "") {
            alert("Please fill all fields.");
            return;
        }

        alert(
            `Username: ${username}\nPassword: ${password}`
        );

        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <h1 className="text-3xl mt-5">5. Clear Inputs After Submit</h1>
            <h2 className="text-2xl mt-2">Login Form</h2>

            <form onSubmit={handleSubmit} className="text-2xl">
                <div>
                    <label>Username:</label>
                    <br />
                    <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} className='border-2'/>
                </div>

                <br />

                <div>
                    <label>Password:</label>
                    <br />
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className='border-2'/>
                </div>

                <br />

                <button type="submit" className="border-2 pl-2 pr-2">
                    Login
                </button>
            </form>
        </div>
    );
}

export default FormCleaner;