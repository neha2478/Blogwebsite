//THis we have create using the date and Time....
import React from 'react';
import styles from './blog.module.css'

const DateTime = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div className={styles.samay}>
        <div>
            <p>Date: {formattedDate}</p>
        </div>
        <div>
            <p>Time: {formattedTime}</p>
        </div>
    </div>
  );
};

export default DateTime;
