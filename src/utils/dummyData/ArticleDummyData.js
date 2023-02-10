import {
    v4 as uuidv4
} from 'uuid';
import article1 from '../../assets/images/blog-page/article-1.png'
import article2 from '../../assets/images/blog-page/article-2.png'
import article3 from '../../assets/images/blog-page/article-3.png'
import article4 from '../../assets/images/blog-page/article-4.png'

export const ArticleData = [{
        id: uuidv4(),
        title: 'Why We Don’t (Usually) Project Organic Traffic Results for Our Clients',
        description: 'While we can’t tell you precisely how much traffic you’ll see on your site by a certain date, we have other ways of forecasting the impact of our work on your site’s traffic, and what to expect from your investment in SEO.',
        image: article1
    },
    {
        id: uuidv4(),
        title: 'How a Recruiting Website Tripled Organic Traffic in 6 Months',
        description: 'Here’s the story of how we grew a B2B website by focusing on the end user audience — a B2B2C play.',
        image: article2
    },
    {
        id: uuidv4(),
        title: '4 Strategies to Improve Online Community Engagement',
        description: 'Community growth and community engagement are two very different things. Algorithms, self-promotion by members, and time can make a community to grow — but that doesn’t mean members are engaged.',
        image: article3
    },
    {
        id: uuidv4(),
        title: 'Create Viral Engagement Loops To Drive Customer Retention',
        description: 'The marketing dream is to create viral loops for your audience. But how do you actually create them? We explain how, using a world-class example from marketing executive Amanda Goetz.',
        image: article4
    },
]