import React, {useState} from 'react';
import styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Sidenav = () => {
    let navigate = useNavigate();

    const [searchTeam, setSearchTeam] = useState('');

    const handleSearch = () => {
        // Implement your search functionality here
        alert(`Searching for: ${searchTeam}`);
    };


    return (
        <div className={styles.subcontainer}>
            {/*Search container with input and button....*/}
            <div id={styles.searchcontainer}>
                <input
                    type="text"
                    placeholder="Search here ...."
                    value={searchTeam}
                    onChange={(e) => setSearchTeam(e.target.value)}
                />
                <button onClick={handleSearch} id={styles.click}>Search</button>
            </div>

            <div id={styles.dropdowncontainer}>
                <div>
                    <button onClick={() => navigate('/createaccount')} >Create an Account</button>
                </div>
            </div>
        </div>
    )
}

export default Sidenav
