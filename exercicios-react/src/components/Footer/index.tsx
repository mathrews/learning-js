import { FaFacebook, FaTwitch, FaGithub } from 'react-icons/fa'

import './index.css'

const Footer = () => {
    return (
        <>
            <footer>
                <ul className='social_list'>
                    <li><FaFacebook/></li>
                    <li><FaTwitch/></li>
                    <li><FaGithub/></li>
                </ul>
                <p>Nosso Rodapé</p>
            </footer>
        </>
    )
}

export default Footer