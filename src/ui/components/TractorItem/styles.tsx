import styled from 'styled-components/native';

export const TractorBox = styled.TouchableOpacity`
	background-color: ${props => props.theme.colors.white};
	flex-direction: row;
	width: 100%;
	height: 110px;
	border-radius: 15px;
	margin-bottom: ${props => `${props.theme.spacing.default}px`};
	padding: ${props => `${props.theme.spacing.default}px`};
`;

export const SectionTractorPicture = styled.View`
	background-color: #d3e0f4;
	height: 100%;
	width: 70px;
	padding: 10px;
	border-radius: 12px;
	margin-right: 15px;
`;

export const TractorPicture = styled.Image`
	height: 100%;
	width: 100%;
`;

export const TractorInfo = styled.View`
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
