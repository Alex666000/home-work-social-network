import React from 'react';
import {ProfileInfo} from './Profileinfo/Profileinfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ActionType, ProfilePageType} from '../../redux/state';

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void

}

export const Profile: React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.profilePage.newPostText}
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
            />
        </div>
    );
};

