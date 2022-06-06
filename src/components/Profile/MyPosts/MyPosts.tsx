import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionType, PostType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionType) => void | any
    newPostText: string
    type: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let newPostElement: any = React.createRef()

//локальный колбек addPost
    let addPost = () => {
        // props.addPost()
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        // props.updateNewPostText(text)
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action)
    }

    let postsElements = props.posts.map((p) => <Post id={1} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                <button onClick={addPost} className={s.addPost}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

