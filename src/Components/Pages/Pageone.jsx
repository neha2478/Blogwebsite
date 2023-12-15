import React from 'react';
import {Link} from 'react-router-dom';
import styles from './pageone.module.css';

const Pageone = () => {
  return (
    <>
      <div className={styles.Front_page}>
        <h1>Computer Engineering</h1>
        <p>142,765 CoumputerEngineers follow this</p>
      </div>
      <div className={styles.pagetwo}>
          <div id={styles.select}>
            <ul>
                <li><a href="#">All Posts(32)</a></li>
                <li><a href="#">Article</a></li>
                <li><a href="#">Event</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Job</a></li>
              </ul>
          </div>
          <div id={styles.but}>
            <div>
              <button id={styles.a}>Write a post</button>
            </div>
            <div>
              <button id={styles.b}>Join Group</button>
            </div>
          </div>
      </div>
      <hr/>
    </>
  )
}

export default Pageone


{/* <>
      <div className={styles.Front_page}>
        <h1>Computer Engineering</h1>
        <p>142,765 CoumputerEngineers follow this</p>
      </div>
      <div>
          <div className={styles.Pagetwo}>
            <ul>
              <li>All Posts</li>
              <li>Article</li>
              <li>Events</li>
              <li>Education</li>
              <li>Job</li>
            </ul>
          <div>
          <hr/>
          <div>
            <button>Add Posts</button>
          </div>
          <div>
            <button>Join Group</button>
          </div>
        </div>
      </div>
    </> */}
