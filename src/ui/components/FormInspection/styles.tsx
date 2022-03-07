import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
	height: ${props => `${props.theme.spacing.screenHeight * 0.88}px`};
	padding: ${props => `${props.theme.spacing.default}px`};
`;

export const Form = styled.View`
	flex: 1;
`;

export const LabelInput = styled.Text`
	font-size: 18px;
	margin-bottom: 5px;
	letter-spacing: 0.36px;
	font-weight: 600;
`;

export const TextInput = styled.TextInput`
	height: 120px;
	border: 1px solid #2f3542;
	border-radius: 10px;
	background-color: #f6f7fa;
	margin-bottom: 15px;
	padding: 10px;
	font-size: 16px;
	color: #000;
`;

export const GroupButtons = styled.View`
	flex-direction: row;
	height: 60px;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.TouchableOpacity`
	height: 55px;
	flex: 1;
	align-items: center;
	justify-content: center;
	border-radius: 28px;
	margin: 0px 8px;
	background-color: ${props => props.color};
`;

export const BtnDate = styled.TouchableOpacity`
	height: 50px;
	border: 1px solid #2f3542;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	background-color: #f6f7fa;
	margin-bottom: 15px;
	padding: 10px;
`;

export const BtnDateText = styled.Text`
	color: ${props => props.theme.colors.placeholderInput};
	font-size: 18px;
	letter-spacing: 1px;
`;

export const ButtonText = styled.Text`
	color: white;
	text-transform: uppercase;
	letter-spacing: 1.62px;
	font-weight: 600;
	font-size: 18px;
`;

export const GroupStatus = styled.View`
	flex-direction: row;
	height: 70px;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
	/* background-color: gray; */
`;

export const StatusBtn = styled.TouchableOpacity`
	height: ${props => (props.isActive ? '60px' : '50px')};
	width: 32%;
	flex: 1;
	margin-left: 7px;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	box-shadow: 0px 2px ${props => (props.isActive ? '8px' : '4px')} #0000001a;
	background-color: ${props => props.color};
`;

export const StatusBtnText = styled.Text`
	color: white;
	text-transform: uppercase;
	letter-spacing: 0.35px;
	font-weight: 600;
`;
