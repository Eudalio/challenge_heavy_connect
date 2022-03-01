import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${props => props.theme.colors.header};
	height: 120px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
