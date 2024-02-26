
import Navbar from '../../components/navbar/navbar';

import './LandingPage.css';

import {Button} from "@mui/material";

import heroLeft from './home-left.png';

function LandingPage() {
    
    return (
        <main className=''>
            <Navbar />

            <div className='hero-section'>

                <div className="left">
                    <img  className='left_image' src={heroLeft} alt="HOME LEFT" />
                </div>

                <div className="right">

                    <div className="text_container">
                        <span className='text_1'>
                            THIS IS ME
                        </span>
                        <h2>
                            TRAVOR JAMES
                        </h2>
                        <span className='caption' >
                            You will begin to realise why this exercise is called the 
                            Dickens Pattern (with reference to the ghost showing Scrooge some different futures)
                        </span>

                        <div className="button_container">
                            <Button variant='contained' >Discover Now </Button>
                        </div>
                    </div>
                    
                </div>

            </div>
            
        </main>
    );

}


export default LandingPage;
