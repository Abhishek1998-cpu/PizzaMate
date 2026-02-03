export type FilterKey = 'all' | 'no-oven' | 'pan-tawa' | 'beginner';

export const libraryFilters: { key: FilterKey; label: string; icon: string }[] = [
  { key: 'all', label: 'All', icon: 'filter-list' },
  { key: 'no-oven', label: 'No Oven', icon: 'block' },
  { key: 'pan-tawa', label: 'Pan / Tawa', icon: 'soup-kitchen' },
  { key: 'beginner', label: 'Beginner', icon: 'school' },
];

export type HomeCard = {
  title: string;
  description: string;
  button: string;
  buttonStyle: 'primary' | 'ghost';
  icon: string;
  image: string;
  comingSoon?: boolean;
};

export const homeCards: HomeCard[] = [
  {
    title: 'Choose a Pizza',
    description: 'Browse our curated collection of authentic recipes',
    button: 'Browse',
    buttonStyle: 'primary',
    icon: 'restaurant-menu',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLJQ6z0NoJ4-R0V4XyKkZx2xNOEHCNp8Q2a2O8sJxOiKR04LNrjK99re8FRgf86y-EvoxeRNS8cA5AlYLnFYM6LJpu4BvKlbzTfAJcLgof39tYIUaQ8sM4jthxn18nNfTmHFLPNFrKseNcRfZ3DDoLD0tQfYIeIolJkFG6HUN5qaz85yNJu87VXEOxZF8Yq0e483smzWsYHVA3vO3bViW03tYqZQjUfEMo_8SJ4dFKT28ick0SiZyOMSrfFmvu09YsKkGZn7aoN7uL',
  },
  {
    title: 'Help Me Choose',
    description: 'Not sure? Let us find your perfect pizza match',
    button: 'Start Quiz',
    buttonStyle: 'ghost',
    icon: 'auto-fix-high',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcN4lqB02ZXIdEOJtZVl1t3JlyWmfHciZPPDDCZs_n-skwxamxoZzXVWmO3soOl5suFJbDrNyGCAPSVF7ZI8N_6hYKzNRVbtbd192XANrn4EEkIGPuBPA17DkHTw0eWeNdoe5eMw5K2gwh1XdPAeKQFvWht7gWSoNJZcrnq5ecpdjEpvyDOCIBxgDv0kNhUzPHNF5XBVshWrgydjMrnvo3fLhW_n1jKOZGbwHn2Sbcddfnt4IndVDAQUYLngoidph6iR-O4k_Prx0S',
  },
  {
    title: 'Create My Pizza',
    description: 'Build a custom culinary masterpiece from scratch',
    button: 'Create',
    buttonStyle: 'primary',
    icon: 'add-circle',
    comingSoon: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGXEE1iT6lLj6rsl4yX_TEk_8iPc1U0rWjX-IKCwM5vZ41zZYwtJQmBpv4HOnm3oNRyPIEpmQhgM-3sHoWxU4rPDnDM3O09PWXbCoFfByCtj9TcusyhEKdjd0dVvh53MHhRM0ZSfsh-2L7DYFAaXg4t_Id9BYHRZM4J97cqw6EwWAS0b3-RF-17ZNK8fehEsC89p_IpZD1ZjyHWHkWV-Xm6hZlxbqiAJ6RniZ-p7xxpyaY0U_Ae2mi9wxa5NQ2qNSSwhHxkYiLonbT',
  },
  {
    title: 'Fix My Pizza',
    description: 'Troubleshoot dough, crust, or sauce issues',
    button: 'Get Help',
    buttonStyle: 'ghost',
    icon: 'build',
    comingSoon: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDn9kd7b3qrZKjAR3OQ0zxDJBCgiiQvpLTEaUhhLAM1YZpzLImogLVDWK5n-fzzmMZLBoUgsiGSOKB3oIvEf9TBPjCFygc6gQcCxDjgNLhJ68sU6WlPJQjTBrNhlNgLz8J8bYZgC7FKUA8m2TYZ1aZl4rIGyR6XQpftFe4h1IlOVzxib_kc5_E2uu3Hq2e5YG85xyZnbAFuXspFWPyp341kkVA9MRPI6fst-k6xmdOVNj9cvzttmlKex-pxlXWvubwYel8gd2ZPXZAR',
  },
];

export const helpMeChooseDefaultResultSlugs = [
  'cast-iron-margherita',
  'spicy-diavola',
  'deep-dish-deluxe',
] as const;

