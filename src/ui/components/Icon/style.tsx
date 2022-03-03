import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	background-color: ${props => props.theme.colors.backgroundIcon};
	border-radius: 10px;
	height: 36px;
	width: 36px;
	justify-content: center;
	align-items: center;
`;
