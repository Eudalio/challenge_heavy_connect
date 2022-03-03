import styled from 'styled-components/native';

export const Container = styled.View`
	height: 60px;
	padding: 0px ${props => `${props.theme.spacing.default}px`};
	align-items: center;
	flex-direction: row;
	background-color: ${props => props.theme.colors.header};
`;

export const HeaderTitleModal = styled.Text`
	color: ${props => props.theme.colors.white};
	font-size: 20px;
	width: 100%;
	text-align: center;
	font-weight: 600;
	letter-spacing: 0.9px;
`;

export const HeaderModalIcon = styled.TouchableOpacity`
	background-color: ${props => props.theme.colors.backgroundIcon};
	position: absolute;
	right: 20px;
	border-radius: 10px;
	height: 36px;
	width: 36px;
`;
