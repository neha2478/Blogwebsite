import React from 'react'
import DateTime from './DateTime';
import styles from './blog.module.css'

const Blogposts = ({heading , title, content, imageUrl}) => {
  return (
    <div className={styles.border}>
        <img src={imageUrl} alt={title}/>
        <h5>{heading}</h5>
        <h3>{title}</h3>
        <p>{content}</p>
        <DateTime/>
    </div>
  )
}

export default Blogposts
