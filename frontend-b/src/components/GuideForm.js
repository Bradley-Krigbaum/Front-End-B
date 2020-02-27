import React from 'react';

const GuideForm = ( { dummyData } ) => {
    return (
    <>
        <form>
            <label>
                {dummyData.title}
            </label>
            <div>
                {dummyData.image}
            </div>
            <label>
                Steps:
                {dummyData.content}
            </label>
        </form>
    </>
    );
}

export default GuideForm;
