import { Component } from '@angular/core';

interface MyStory {
  title: string;
  coverImage: string;
  status: 'draft' | 'published';
  updatedAt: string;
  progress?: number;
  views?: string;
  likes?: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  recentStories: MyStory[] = [
    {
      title: 'The Last Sky Kingdom',
      coverImage: 'https://images.openai.com/static-rsc-4/DqAvR1u5ZYpgHHjI4dhpqpvzZticVfguN27rv5wXLzBu4eTsF-Dwqu0l_7PttESMVY7nRCol0aQxwhtOQa_Ze25nBw61GqSUwgS5FUnFMdcoU-CJEr1B2-zl19jAMEYf9kDz-0d2k6UmCKtqmWy_jtsxWBQDxhnemREk_PGOY881eWLcsntu8pnGFWnAlKjt?purpose=fullsize',
      status: 'draft',
      updatedAt: 'Last updated 2 hours ago',
      progress: 45
    },
    {
      title: 'Project Eclipse',
      coverImage: 'https://images.openai.com/static-rsc-4/CaTszaBVC5XKNcLiQpDke0iuhpFgWKQevbVk_3hh7Rs9uDom4GNMSuWePcVgGmyi452ycGW9mr58c8g67Y9Fer7XTa0Md5xx69F-ik40rYH3YPSblyNGm-zX0LuKZynsSgIxFBP-NV80SgMMPkL0XNSHk3CchFNFYd71eC0PW4eV36NzaZEa4W5xC-z8jjJ7?purpose=fullsize',
      status: 'published',
      updatedAt: 'Last updated 2 days ago',
      views: '12K',
      likes: '4.5K'
    },
    {
      title: 'The Time Library',
      coverImage: 'https://images.openai.com/static-rsc-4/HjWj3g4qJgEwJe7DZzxsjUJZzqb3ur1LeOnoABx5m7-is7u9RBH3u1tsz7QI3WUI1UCdEV1SUznpxpmaQn9ckt9_kUff6oceeu6iQ3ZcLfXMNtJeZcKJIc09YITAIpw6a9nEiidkDrOibQbO5O8xsgHQKJwzDYw_DRgGEoeqH1NXDGzI1zNdjuCVjdQqYfpw?purpose=fullsize',
      status: 'draft',
      updatedAt: 'Last updated 5 days ago',
      progress: 80
    },
    {
      title: 'The Forgotten Planet',
      coverImage: 'https://images.openai.com/static-rsc-4/ucvLqV7L9Pzww_nM8jdmyCF0eDRr3z76zWIl2WPgsS7GIiZwwemLjmhWdD4juQZIFrz69-tyGgRmyV9pLafcpSoT5Km9-cWPmNZy--qF6H9CmXk15U3Bmv0nDQvD8NlWPAMIgRblqomNFgcnhF2tiyCWf1xaMMoDq0E-5JbOtaC8p4uFhBcsc5ZTwJy0BR6x?purpose=fullsize',
      status: 'published',
      updatedAt: 'Last updated 1 week ago',
      views: '8.2K',
      likes: '1.1K'
    }
  ];
}
