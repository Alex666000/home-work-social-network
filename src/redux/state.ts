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

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

// state:
export let state: RootStateType = {
    //ветки profilePage и dialogsPage - отдельный под]объект для каждой страничке...
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
}
// функция добавления постов -  её прокинем в UI колбеком чтобы при добавлении поста UI передал нам текст того что написал:
export const addPost = () => {
    let newPost = {id: 5, message: state.profilePage.newPostText, likeCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderThree(state)
}
//обновить пост:
export const updateNewPostText = (newText: string) => {
    //приходит текст из пропсов и мы перерисовываем компоненту:
    state.profilePage.newPostText = newText
    rerenderThree(state)
}

export  const subscriber = (observer: any) => {
    rerenderThree = observer // наблюдатель "observer" - паттерн кто-то наблюдает за объектом потом уведомляет что что-то произошло
}
//заглушка функция используется чтобы цикличности не было:
let rerenderThree = ( state: RootStateType) => {
    console.log('State changed')
}



