import React, { useState, useEffect } from 'react';
import './datatable.css';

function DataTable() {
    const [data, setData] = useState([]);
    
    // Fetch data from the API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);
    
    // Render the table with data
    return (
        <div >
            <div style={{marginTop:'3%', marginBottom:'1rem', fontWeight:'700', fontSize:'2rem', textAlign:'center' }}>GET API EXAMPLE</div>
            <table className="table" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
