import React, { useState } from 'react'

function PlayList() {
    const [song, setSong] = useState("");
    const [artist, setArtist] = useState("");
    const [playlist, setPlaylist] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        const newSong = {
            song,
            artist,
        };

        setPlaylist([...playlist, newSong]);
    }

    return (
        <div>
            <h1 className='text-3xl mt-5'>4. PlaylistAdder Component</h1>
            <form onSubmit={handleSubmit} className='text-2xl mt-2'>
                <input type="text" placeholder="Song Name" value={song} onChange={(e) => setSong(e.target.value)} className='border-2'/>

                <br /><br />

                <input type="text" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} className='border-2'/>

                <br /><br />

                <button type="submit" className='border-2 pl-2 pr-2'>
                    Add Song
                </button>
            </form>

            <h2 className='text-2xl mt-5'>-:Playlist:-</h2>

            <ul className='text-2xl'>
                {playlist.map((item, index) => (
                    <li key={index}>
                        {item.song} - {item.artist}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PlayList