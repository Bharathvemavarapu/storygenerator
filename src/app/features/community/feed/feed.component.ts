import { Component } from '@angular/core';

interface Story {
  id: string;
  title: string;
  genre: string;
  coverImage: string;
  readTime: string;
  views: string;
  likes: string;
  comments: string;
  size: 'small' | 'medium' | 'large';
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  stories: Story[] = [
    {
      id: '1',
      title: 'The Last Sky Kingdom',
      genre: 'Fantasy Adventure',
      coverImage: 'https://images.openai.com/static-rsc-4/DqAvR1u5ZYpgHHjI4dhpqpvzZticVfguN27rv5wXLzBu4eTsF-Dwqu0l_7PttESMVY7nRCol0aQxwhtOQa_Ze25nBw61GqSUwgS5FUnFMdcoU-CJEr1B2-zl19jAMEYf9kDz-0d2k6UmCKtqmWy_jtsxWBQDxhnemREk_PGOY881eWLcsntu8pnGFWnAlKjt?purpose=fullsize',
      readTime: '15m',
      views: '24.5k',
      likes: '4.2k',
      comments: '320',
      size: 'large'
    },
    {
      id: '2',
      title: 'Project Eclipse',
      genre: 'Science Fiction',
      coverImage: 'https://images.openai.com/static-rsc-4/CaTszaBVC5XKNcLiQpDke0iuhpFgWKQevbVk_3hh7Rs9uDom4GNMSuWePcVgGmyi452ycGW9mr58c8g67Y9Fer7XTa0Md5xx69F-ik40rYH3YPSblyNGm-zX0LuKZynsSgIxFBP-NV80SgMMPkL0XNSHk3CchFNFYd71eC0PW4eV36NzaZEa4W5xC-z8jjJ7?purpose=fullsize',
      readTime: '20m',
      views: '18.2k',
      likes: '3.1k',
      comments: '210',
      size: 'medium'
    },
    {
      id: '3',
      title: 'The Time Library',
      genre: 'Mystery Fantasy',
      coverImage: 'https://images.openai.com/static-rsc-4/HjWj3g4qJgEwJe7DZzxsjUJZzqb3ur1LeOnoABx5m7-is7u9RBH3u1tsz7QI3WUI1UCdEV1SUznpxpmaQn9ckt9_kUff6oceeu6iQ3ZcLfXMNtJeZcKJIc09YITAIpw6a9nEiidkDrOibQbO5O8xsgHQKJwzDYw_DRgGEoeqH1NXDGzI1zNdjuCVjdQqYfpw?purpose=fullsize',
      readTime: '12m',
      views: '32.1k',
      likes: '5.8k',
      comments: '450',
      size: 'medium'
    },
    {
      id: '4',
      title: 'The Forgotten Planet',
      genre: 'Space Adventure',
      coverImage: 'https://images.openai.com/static-rsc-4/ucvLqV7L9Pzww_nM8jdmyCF0eDRr3z76zWIl2WPgsS7GIiZwwemLjmhWdD4juQZIFrz69-tyGgRmyV9pLafcpSoT5Km9-cWPmNZy--qF6H9CmXk15U3Bmv0nDQvD8NlWPAMIgRblqomNFgcnhF2tiyCWf1xaMMoDq0E-5JbOtaC8p4uFhBcsc5ZTwJy0BR6x?purpose=fullsize',
      readTime: '25m',
      views: '10.5k',
      likes: '1.2k',
      comments: '89',
      size: 'large'
    },
    {
      id: '5',
      title: 'The Shadow Detective',
      genre: 'Mystery Thriller',
      coverImage: 'https://images.openai.com/static-rsc-4/IouOI4cQPwYjh4QqnzZP7nY-8WtmCrT60QatbJA2W8YrbnZfvtMj-rzDs53CXTkYhmrXmsiX54KjIfv1wOLDZAIo6osCOsOEJI-U7nI3b4k8D3dAAftoEjHl_NLc0cDqYP0pW7Nt1S7NGNMzxuWNsyRcV_dZkIhW4y2V9oHG1DgL44pT--5f2JHbCTGD1nDh?purpose=fullsize',
      readTime: '18m',
      views: '15.7k',
      likes: '2.5k',
      comments: '176',
      size: 'small'
    },
    {
      id: '6',
      title: 'The Forest of Wishes',
      genre: 'Family Fantasy',
      coverImage: 'https://images.openai.com/static-rsc-4/SQdhV8TF4uMYJT7cTLe_ywkS9INoK3BSQFYxQfOzc_TOGEI-iKfnZ-1kbfoDRp8kGlWif6EfRf7xrpIF68CGAc7eihUqQIZc8cdrQ-LsctHGovDlkVfjYtwxhgDm5b0X9JqLjrGeCjjnB8ACeih1SoBWSB-Y3NdOw28niksQVKtl5P8jVPc91EymsOu0-3uW?purpose=fullsize',
      readTime: '10m',
      views: '40.2k',
      likes: '8.9k',
      comments: '620',
      size: 'medium'
    },
    {
      id: '7',
      title: 'Cyber Ninja Academy',
      genre: 'Action Anime',
      coverImage: 'https://images.openai.com/static-rsc-4/uBQOn6XPoL4mrcTo9fUtJNugDO7jpKczfb-s2L2p39-1w861oiraSWHaSdDR12AA5IbmtRXHXK0mhhGB2sk-VYwUai-czqg9qvmGyVvynZt6BVso3AhJ_q3ienxnEYqMx2d1RNmvmjdI86cdZNaO6vBpoIY2E4bnuzFtixSWzPZLR8Yd9rEDSyh63BBVAoa6?purpose=fullsize',
      readTime: '22m',
      views: '55.4k',
      likes: '12.1k',
      comments: '930',
      size: 'large'
    },
    {
      id: '8',
      title: 'Kingdom of Fire and Ice',
      genre: 'Epic Fantasy',
      coverImage: 'https://images.openai.com/static-rsc-4/5ra27arcxwq1C4OKV4uSo86TQhuWj1cikw_VvxcUn04dOdAHjVv23hHoIFn84MDThctuMflLwoBIOc0hUm4JpGixZFAY5_AXyMkqZtwE5IB2O53MpwjAwGAwW15typEIls8xR4kFGQHw2MnqZyzQSfryF2HkYDJy-ZRpWQqH1osFBRieVk_VGBd3SqtyxaNH?purpose=fullsize',
      readTime: '30m',
      views: '28.9k',
      likes: '6.4k',
      comments: '412',
      size: 'medium'
    }
  ];
}
