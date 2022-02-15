import { rerenderEntireTree } from "./render";

let state = {
    dialogsData: [
        {id: 1, name: 'Jerry', surname: 'Van Boven' },
        {id: 2, name: 'Robbie', surname: 'Schuurmans' },
        {id: 3, name: 'Rikkert', surname: 'Biemans' },
        {id: 4, name: 'Barrie', surname: 'Butsers' },
        {id: 5, name: 'Manuela', surname: 'Van Grunsven' }
      ],
    postsData: [
        {id: 1, authorName:'Richard', authorSurname:'Batsbak', postText: 'Wij willen meer geld, KUT!'},
        {id: 2, authorName:'Richard', authorSurname:'Batsbak', postText: 'My dad makes a hell of a dish. Well, thats about the average recipe, because there are a lot of variations. He takes the soup, it doesnt heat up, its not my dads thing to heat up. He takes the soup, puts it in a frying pan and starts frying. He adds a huge amount of onions, garlic, black pepper and red flour! for viscosity, tomato paste on top. Its all fried until its smoking. Then its taken off the fire and cooled on the balcony. Then my dad brings it in and begins to eat it with a generous dollop of mayonnaise. He eats it from the frying pan, scraping it with a spoon. He eats and whispers in a whisper: Oh, fuck. Hes got sweat on his forehead. He kindly offers it to me sometimes, but I refuse. Needless to say, what a wild fart it is afterwards? The stench is so bad it makes the wallpaper peel off the walls.'},
        {id: 3, authorName:'Richard', authorSurname:'Batsbak', postText: '?'},
    ],
    newPostText: 'Vse Ok?'
};

export let addPost= (postMessage) =>{
    let newPost = {
        id: 4,
        authorName:'Richard',
        authorSurname:'Batsbak',
        postText:postMessage
    };
    state.postsData.push(newPost);
    rerenderEntireTree(state);
}
export function updateNewPostText(newText) {
    state.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;