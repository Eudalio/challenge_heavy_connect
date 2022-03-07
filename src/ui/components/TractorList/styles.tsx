import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${props => props.theme.colors.background};
	padding: ${props => `${props.theme.spacing.default}px`};
	height: ${props => `${props.theme.spacing.screenHeight * 0.82}px`};
`;

export const HeaderList = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 10px;
`;

export const LabelList = styled.Text`
	color: ${props => props.theme.colors.header};
	font-weight: bold;
	letter-spacing: 0.7px;
	font-size: 16px;
`;

export const CountLengthList = styled(LabelList)`
	color: ${props => props.theme.colors.gray};
`;
