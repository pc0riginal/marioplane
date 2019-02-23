import React from 'react';
import moment from 'moment';

const Notifications =(props)=>{
    const {notifications} = props;
    return(
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <div className="card-title">Notifications</div>
                    <ul>
                        {notifications && notifications.map(res=>{
                            return(
                                <li key = {res.id}>
                                    <span className="pink-text">{res.user} </span>
                                    <span>{res.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(res.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}            
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications