import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author= "George" 
                    timeAgo= "yesterday, at 3:08pm" 
                    commentText="Nice cool" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author= "Benjamin" 
                    timeAgo="2 days ago, at 4:44" 
                    commentText="ouais ça va" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author= "Ginette" 
                    timeAgo="Today, at 2" 
                    commentText="shupa chups" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author= "Barbie" 
                    timeAgo="Minutes ago" 
                    commentText="comme à la guerre" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))

/// 