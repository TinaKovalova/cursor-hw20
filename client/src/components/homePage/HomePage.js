import './HomePage.css';
import socialnetworking from '../../assets/socialnetworking.jpg';

export const HomePage = () => {
    return (
        <div className='about-block'>
            <div className='about-block-card'>
                <div className='card-text'>
                    <p>
                        Social Media plays a very important role in today's life, social Media are web-based online
                        tools that enable people discover and learn new information, share ideas, interact with new
                        people and organizations. It has changed the way people live their life today, it has made
                        communication much easier.
                    </p>
                </div>
                <img src={socialnetworking} alt='socialnetworking'/>
            </div>
        </div>
    )
}