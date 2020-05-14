
### App Architecture

- State management: `redux`
- Data binding: `react-redux`
- Asynchronous Actions handling: `redux-observable` and `rxjs`

### Project Structure

```sh
├── App.tsx
├── actionTypes.ts
├── store.ts
├── theme.tsx
├
├── assets
│   └── fonts
├── config
├── epics
│   ├── api
│   ├── favorite
│   │   └── __test__
│   └── mock
├── images
├── mobile
│   ├── components
│   │   ├── back-button
│   │   ├── bottom-tabbar
│   │   ├── card
│   │   ├── expand-row-item
│   │   ├── favorite-icon
│   │   ├── heade-left
│   │   ├── icon
│   │   ├── row-item
│   │   ├── tab-header
│   │   ├── tabbar-view
│   │   ├── tag-view
│   │   └── text-row-item
│   ├── navigators
│   └── screens
│       ├── explore
│       ├── home
│       ├── media
│       ├── personality
│       ├── profile
│       └── training
├── reducers
└── utils
```