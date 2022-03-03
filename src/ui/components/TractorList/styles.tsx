import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${props => props.theme.colors.background};
	padding: ${props => `${props.theme.spacing.default}px`};
	display: flex;
	height: ${props => `${props.theme.spacing.screenHeight * 0.82}px`};
`;

export const HeaderList = styled.View`
	display: flex;
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

export const TractorBox = styled.View`
	background-color: ${props => props.theme.colors.white};
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 110px;
	border-radius: 15px;
	margin-bottom: ${props => `${props.theme.spacing.default}px`};
	padding: ${props => `${props.theme.spacing.default}px`};
`;

export const TractorPicture = styled.Image`
	height: 100%;
	width: 70px;
	border-radius: 15px;
	margin-right: 15px;
`;

export const TractorInfo = styled.View`
	display: flex;
	height: 100%;
	padding: 2px 0px;
	justify-content: space-between;
`;

export const TractorName = styled.Text`
	letter-spacing: 0.9px;
	font-weight: bold;
	font-size: 18px;
`;

export const TractorID = styled.Text`
	letter-spacing: 0px;
	color: #57606f;
`;

export const TractorStatus = styled.View`
	display: flex;
	flex-direction: row;
`;

export const TractorStatusColor = styled.View`
	height: 16px;
	width: 16px;
	border-radius: 4px;
	margin-right: 5px;
	background-color: ${props => props.color};
`;

export const TractorStatusText = styled.Text`
	letter-spacing: 0.7px;
	font-weight: bold;
	text-transform: capitalize;
	color: #2f3542;
`;
