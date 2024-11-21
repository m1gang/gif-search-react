import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h1 className='title-gif'>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
