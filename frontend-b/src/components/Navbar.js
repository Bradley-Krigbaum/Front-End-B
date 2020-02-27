import React from 'react';
import SearchForm from './SearchForm';

const Navbar = () => {
    return (
    <>
        <section>
            <div>
                [ LOGO HERE ]
            </div>
            <section>
                <div>
                    <SearchForm />
                </div>
                <div>
                    <button>
                        [ ADD GUIDE / LINK TO GUIDES ]
                    </button>

                    <button>
                        [ FILTER DROP DOWN ]
                    </button>
                
                    <button>
                        [ PROFILE PAGE ]
                    </button>
                </div>
            </section>
            
        </section>
    </>
    );
}

export default Navbar;
