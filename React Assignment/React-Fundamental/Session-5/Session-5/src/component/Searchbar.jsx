import React, { useState } from 'react'

function Searchbar() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <h1 className='text-3xl mt-5'>2. SearchBar Component</h1>

            <input type="text" placeholder="Search Product" value={search} onChange={(e) => setSearch(e.target.value)} className='text-2xl mt-2' />

            <h3 className='text-2xl'>You searched: {search}</h3>
        </div>
    )
}

export default Searchbar