import { Carousel } from '../components/Carousel';

export default function Website() {
    const imgs = [
        '/static/website_stats.jpeg',
        '/static/website_mails.jpeg',
        '/static/website_posts.jpeg'
    ];
    const props = {
        imgs:imgs,
        length:10
    }
    return (
        <>
        <Carousel {...props}/>
        </>
    );
}