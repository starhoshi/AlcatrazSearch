export const STARS = 'stargazers_count';
export const UPDATED = 'pushed_at';
export const WATCHES = 'subscribers_count';
export const FORKS = 'forks_count';
export const NAME = 'name';
export const CREATED = 'created_at';


export const ORDER_BY_TITLES = {
  [STARS]: 'Stars',
  [UPDATED]: 'Updated',
  [CREATED]: 'Created',
  [WATCHES]: 'Watchers',
  [FORKS]: 'Forks',
  [NAME]: 'Name'
};
export const ORDER_BY_ICONS = {
  [STARS]: 'star',
  [UPDATED]: 'clock-o',
  [CREATED]: 'calendar',
  [WATCHES]: 'eye',
  [FORKS]: 'code-fork',
  [NAME]: 'sort-alpha-asc'
};
export const ORDER_BY_ORDERS = {
  [STARS]: ['desc'],
  [UPDATED]: ['desc'],
  [CREATED]: ['desc'],
  [WATCHES]: ['desc'],
  [FORKS]: ['desc'],
  [NAME]: ['asc']
};
