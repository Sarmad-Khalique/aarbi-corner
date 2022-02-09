import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';

export default class DirectoryItems extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: "hats",
                    imageURL: "https://www.maxpixel.net/static/photo/1x/Hat-Manufacture-Music-Hats-Stack-Felt-Manufactory-1365955.jpg",
                    id: 1
                },
                {
                    title: "jackets",
                    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrDZ5UsQaHBqV_AR1N_W47G4bInYoJEMh1Q&usqp=CAU",
                    id: 2
                },
                {
                    title: "sneakers",
                    imageURL: "https://static01.nyt.com/images/2021/05/27/fashion/24SNEAKERCOLORS-sacai-SUB/24SNEAKERCOLORS-sacai-SUB-facebookJumbo.jpg",
                    id: 3
                },
                {
                    title: "men",
                    imageURL: "https://images.medicinenet.com/images/article/main_image/average-height-for-men.jpg",
                    size:"h-96",
                    id: 4
                },
                {
                    title: "women",
                    imageURL: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    size:"h-96",
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu w-full flex flex-wrap md:flex-row flex-col justify-between items-center'>
                {this.state.sections.map(({title, imageURL, id, size}) => (<MenuItem key={id} title={title} imageURL={imageURL} size={size} />))}
            </div>
        );
    }
}
