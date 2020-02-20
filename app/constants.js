export const NAME = 'news';
export const PAGESIZE = 20; 

//action types 
export const HEADLINES_AVAILABLE = `${NAME}/HEADLINES_AVAILABLE`;
export const CATEGORY_HEADLINES_AVAILABLE = `${NAME}/CATEGORY_HEADLINES_AVAILABLE`;

//api url 
export const API_URL = 'https://newsapi.org/v2';
export const API_KEY = '';
export const API_PARAMS = `&pageSize=${PAGESIZE}`;

//api end points 
export const HEADLINES = `${API_URL}/top-headlines${API_KEY}${API_PARAMS}`;
export const SEARCH = `${API_URL}/everything${API_KEY}${API_PARAMS}&sortBy=relevancy`;

//categories 
export const CATEGORIES = ['Business', 'Entertaiment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
