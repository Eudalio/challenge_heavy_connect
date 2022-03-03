import styled from 'styled-components/native';

export const Container = styled.View`
	height: 50%;
	flex-direction: row;
	justify-content: space-between;
`;

export const BtnFilterName = styled.TouchableOpacity`
	padding: 8px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.backgroundIcon};
`;

export const BtnFilterNameText = styled.Text`
	color: ${props => props.theme.colors.white};
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 0.7px;
`;
