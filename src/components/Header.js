 import { getSuggestedQuery } from '@testing-library/react';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';




function Header(props){
    const [q, setQ] = useState('');
    const enterLocation = (e) =>{
        if(e.key === 'Enter'){
            props.getInputData(q);
            e.preventDefault();
        }
    }
    return(
        <header>
            <form className="search-form">
                <BiSearch/>
                <input
                onKeyPress={enterLocation} 
                onChange={event => setQ(event.target.value)}
                className="search-inp" placeholder="Search location"/>
            </form>

        </header>
    )
}

export default Header; 