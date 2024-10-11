import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	box-sizing:border-box;
	padding: 16px;
	display: flex;
	flex-direction:column;
	align-items:flex-start;
	justify-content: center;
	border: 1px solid #ddd;
	border-radius: 8px;
	cursor: pointer;
	backround:white;
	:hover{
	background: #ddd;
	}
`;
const TitleText=styled.p`
	font-size: 20px;
	font-weight: 500
`

const PostListItem = (props) => {
	const {post, onClick} = props;
	return (
		<Wrapper>
			<TitleText onClick={onClick}>{post.title}</TitleText>
		</Wrapper>
	);
};

export default PostListItem;