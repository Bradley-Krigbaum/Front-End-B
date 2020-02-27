import React from 'react';
import Navbar from './components/Navbar';
import FormList from './components/FormList';

function App() {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <body>
            <section>
                <div>
                    [ CTA IMAGE HERE ]
                </div>
                <div>
                    [ CTA CAPTION HERE ]
                </div>
            </section>

            <section>
                <FormList />
            </section>
        </body>
    </div>
  );
}

export default App;
