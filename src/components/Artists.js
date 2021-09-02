import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = 'https://jsonplaceholder.typicode.com/users';

const Artists = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getArtists();
    }, []);


    async function getArtists() {
        try {
            const response = await axios.get(url);
            if (response.status === 200 && response.data) {
                console.log("Data", response.data);
                setArtists(response.data);
            }


        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            {
                !artists.length ? (
                    <h2>No Artists Available</h2>
                ) : (
                    artists.map((artist) => {
                        return (
                            <div className="card" key={artist.id}>
                                <div className="infos">
                                    <div className="name">
                                        <h2>{artist.name}</h2>
                                        <h4>@{artist.username}</h4>
                                    </div>

                                    <p className="text">
                                        {artist.company.name}
                                    </p>

                                    <ul className="stats">
                                        <li>
                                            <h3>{artist.phone}</h3>
                                            <h4>Phone</h4>
                                        </li>
                                        <li>
                                            <h3>{artist.email}</h3>
                                            <h4>Email</h4>
                                        </li>
                                        <li>
                                            <h3>{artist.website}</h3>
                                            <h4>Website</h4>
                                        </li>
                                    </ul>
                                    <div className="links">
                                        <Link to={`/albums/${artist.id}`} > 
                                            <button className="follow">Albums</button>
                                        </Link>
                                        <Link to={`/tweets/${artist.id}`}> 
                                            <button className="view">View Tweets</button>
                                        </Link>
                                        
                                    </div>

                                </div>
                            </div>
                        )


                    })
                )
            }

        </div>
    )

}



export default Artists