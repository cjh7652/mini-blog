import React,{useState} from 'react';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
	width: 100%;
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Container=styled.div`
	width: 100%;
	max-width: 720px;
	:not(:last-child){
		margin-bottom: 16px;
	}
`
const PostWritePage = () => {
	const [title, setTitle]=useState('');
	return (
		<Wrapper>
			<Container>
				<TextInput value={title} height={20} onChange = {(event) =>{setTitle(event.target.value)}} />
				<TextInput value={title} height={20} onChange = {(event) =>{setTitle(event.target.value)}} />
			</Container>
		</Wrapper>
	);
};

export default PostWritePage;