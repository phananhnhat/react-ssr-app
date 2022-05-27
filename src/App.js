import React from 'react';
// import loadable from '@loadable/component'

import Home from './components/Home';
// import Header from './components/Header';
// const Header = loadable(() => import('./components/Header'))

// loadable hiện chỉ chạy trên client
// loadable chạy trên server, CHƯA RÕ mục đích để làm gì ?
// vì trên server các file code được tách ra nhưng không cần phải chờ để tải xuống như client
// Trên server việc chờ file code tải xong ko có ý nghĩa lắm ? điều này có đúng ko ? cần tìm hiểu thêm
// 15/3/2022 Trà lời: với SSR các file JS được tách ra thì sẽ tránh 1 file code to đùng, đơn giản là vậy
// Cách làm thì chi tiết ở file index.js

function App() {
  return (
    <div>
      <h1>This is App</h1>
      <h2>Đây là App123456</h2>
      {/*<Header />*/}
      <Home name="Sammy"/>
    </div>
  );
}

export default App;
