import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	position: absolute;
	width: 80px;
	height: 80px;
	bottom: 20px;
	right: 20px;
	justify-content: center;
	align-items: center;
	border-radius: 50px;
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.btnColor};
	box-shadow: 0px 6px 10px #00000050;
`;

export const FabText = styled.Text`
	font-size: 36px;
	font-weight: 500;
	color: ${props => props.theme.colors.white};
`;
