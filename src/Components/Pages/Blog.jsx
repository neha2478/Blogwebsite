//Blog.jsx file....


import React from 'react';
import Blogposts from './Blogposts';
import styles from './blog.module.css'

const Blog = () => {
    const posts = [
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
            heading: 'Article',
            title: 'What if famous brands had regular fonts? Meet Regular Brands!.',
            content: "I've worked in UX for the better partof decade from now onabort, I plan to reportError.."
        },

        {
            imageUrl: 'https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg',
            heading: 'Education',
            title: 'Tax Benifits for Investment under National Pension Scheme launched by Govenment.',
            content: "I've worked in UX for the better partof decade from now onabort, I plan to reportError.."
        },

        {
            imageUrl: 'https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089_1280.jpg',
            heading: 'Meetup',
            title: 'Finance & Investment Elite Social Mixer @Lujiazui.',
            content: "I've worked in UX for the better partof decade from now onabort, I plan to reportError.."
        },

        {
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            heading: 'Job',
            title: 'Software Devloper',
            content: "I've worked in UX for the better partof decade from now onabort, I plan to reportError.."
        }
    ]
    return (
        <div className={styles.blog}>
            {posts.map((post, index) => (
                <>
                    <Blogposts key={index} {...post}/> 
                </>             
            ))}
        </div>
    )
}

export default Blog
