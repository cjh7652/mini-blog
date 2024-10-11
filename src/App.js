
import './App.css';
import MainPage from './component/page/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import styled from 'styled-components';

const Heading=styled.h1`
	text-align: center;
	font-size: 24px;

`

function App() {
  return (
    <BrowserRouter>
	 	<Heading>미니 블로그</Heading>

		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="post-write" element={<PostWritePage />} />
			<Route path="post/:postId" element={<PostViewPage />} />
		</Routes>
		
	</BrowserRouter>
		
   
  );
}

export default App;
