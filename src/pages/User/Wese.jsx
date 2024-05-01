import React, { useState } from 'react';

const Wese = () => {
    const [formData, setFormData] = useState({
        // Define your form fields here
        // Example:
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/fypPract/TutServlet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Success: Data sent successfula');
                
            } else {
                console.error('Error: Failed to send data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Send Data to Server</h2>
            <form onSubmit={handleSubmit}>
                {/* Example form fields */}
                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Wese;
