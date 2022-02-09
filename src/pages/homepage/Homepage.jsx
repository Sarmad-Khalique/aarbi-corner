import React from 'react';
import DirectoryItems from '../../components/directory-items/DirectoryItems';

const Homepage = () => {
    return (
        <div className="homepage flex flex-col items-center px-5 py-20">
            <DirectoryItems />
        </div>
    );
};

export default Homepage;
