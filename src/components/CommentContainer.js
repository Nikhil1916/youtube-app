import React from 'react'
import { commentsData } from '../Utils/mockCommentsData'
import { user_icon } from '../Utils/constants';
const Comment = ({data}) => {
    const {name, text, replies} = data;
    return (
        <div>
        <div className='mt-2 flex gap-4 items-center bg-gray-50 p-2 rounded-lg'>
            <img src={user_icon} className='h-8' alt="user_icon" />
            <div>
                <p className=' font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
        <div className="pl-6">
            <CommentList commentsData={replies} />
        </div>
        </div>
    )
}

const CommentList = ({commentsData}) => {
    return(
        <div>
            {
                commentsData?.map((comment, i)=>{
                   return <Comment data={comment} key={i}/>
                })
            }
        </div>
    )
}

const CommentContainer = () => {
  return (
    <div className='mt-5 py-2'>
        <h1 className='text-2xl  font-bold'>Comments:</h1>
        <CommentList commentsData={
            commentsData
        } />
    </div>
  )
}

export default CommentContainer