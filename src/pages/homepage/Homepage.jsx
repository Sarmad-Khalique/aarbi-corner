import React from 'react';
import DirectoryItems from '../../components/directory-items/DirectoryItems';

const Homepage = () => {
    return (
        <div className="homepage flex flex-col items-center px-6">
            <DirectoryItems />
        </div>
    );
};

export default Homepage;
