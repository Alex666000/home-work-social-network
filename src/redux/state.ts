export type PostType = {
    id: number,
    message: string
    likeCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
//типизация state:
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
//типизация store:
export type RootStoreType = {
    _state: StateType
    getState: () => any //что возвращает???
    _callSubscriber: (state: StateType) => void
    dispatch: (action: ActionType) => void
    subscriber: (observer: Function | any) => void
}
export type ActionType = {
    type: string
    newText: string
}
// Переменные для "экшнов":
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// store - объект по принципам ООП а не разбросаны файлы как у state:
export let store: RootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likeCount: 12},
                {id: 2, message: 'How are you?', likeCount: 10}
            ],
            newPostText: 'My name is Aleksandr'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Margarita'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Victor'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What is your name'},
                {id: 4, message: 'My name is....'},
                {id: 5, message: 'Let\'s go'},
            ]
        }
    },
    _callSubscriber(state) {
        console.log('Hello friends')
    },

    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer // наблюдатель "observer" - паттерн кто-то наблюдает за объектом потом уведомляет что что-то произошло
    },
// dispatch:
    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

// ActionCreator:
 export const addPostActionCreator = () => ({type: ADD_POST})
// ActionCreator:
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})







