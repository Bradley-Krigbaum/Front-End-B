import React from 'react';
import GuideForm from './GuideForm';

const dummyData = {
    id: '01',
    title: 'TEST',
    image: 'none',
    content: 'THIS IS TEST STEP 1!!!!'
}

const FormList = () => {
    return (
    <>
        <section>
            <div>
                <GuideForm dummyData={dummyData} />
            </div>
        </section>
    </>
    );
}

export default FormList;
