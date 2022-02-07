import PostItem from './PostItem/PostItem.jsx';
import s from './Posts.module.css';

const Posts = () =>{
    return(
        <div className={s.postsWrapper}>
            <PostItem postText='Wij willen meer geld, KUT!' />
            <PostItem postText="My dad makes a hell of a dish. Well, that's about the average recipe, because there are a lot of variations. He takes the soup, it doesn't heat up, it's not my dad's thing to heat up. He takes the soup, puts it in a frying pan and starts frying. He adds a huge amount of onions, garlic, black pepper and red flour! for viscosity, tomato paste on top. It's all fried until it's smoking. Then it's taken off the fire and cooled on the balcony. Then my dad brings it in and begins to eat it with a generous dollop of mayonnaise. He eats it from the frying pan, scraping it with a spoon. He eats and whispers in a whisper: Oh, fuck. He's got sweat on his forehead. He kindly offers it to me sometimes, but I refuse. Needless to say, what a wild fart it is afterwards? The stench is so bad it makes the wallpaper peel off the walls." />
            <PostItem postText='?' />
        </div>
    )
};

export default Posts;