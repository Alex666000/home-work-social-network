import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionType, addPostActionCreator, PostType, updateNewPostTextActionCreator} from '../../../redux/state';
import {AnyAction} from 'redux';

type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: AnyAction) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let newPostElement: any = React.createRef()

//локальный колбек addPost
    let addPost = () => {
        // props.addPost()
        // actionCreator: его вызов вернет экшн
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        // props.updateNewPostText(text)
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    let postsElements = props.posts.map((p) => <Post id={1} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={props.newPostText} value={newPostElement} onChange={onPostChange}></textarea>
                <button onClick={addPost} className={s.addPost}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

