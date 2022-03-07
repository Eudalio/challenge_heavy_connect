import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${props => props.theme.colors.header};
	height: 130px;
	padding: ${props => `${props.theme.spacing.default}px`};
	flex-direction: column;
	justify-content: space-between;
`;
