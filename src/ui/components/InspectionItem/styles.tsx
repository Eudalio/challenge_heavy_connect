import styled from 'styled-components/native';

export const TractorInpectionsItem = styled.View`
	background-color: #e9eaee;
	flex-direction: row;
	margin-left: 15px;
	margin-right: 15px;
	border-radius: 10px;
	margin-bottom: 10px;
	align-items: center;
	justify-content: space-between;
	padding: ${props => `${props.theme.spacing.default}px`};
	min-height: 70px;
`;

export const TractorInpectionsItemInfos = styled.View`
	flex-direction: column;
	flex: 1;
	align-items: flex-start;
	height: 40px;
	justify-content: space-between;
	margin-left: 10px;
	margin-right: 10px;
`;

export const TractorStatus = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const TractorStatusColor = styled.View`
	height: 16px;
	width: 16px;
	border-radius: 4px;
	background-color: ${props => props.color};
`;

export const TractorStatusText = styled.Text`
	letter-spacing: 0.7px;
	font-weight: bold;
	text-transform: capitalize;
	color: #2f3542;
	margin-left: 5px;
`;

export const TractorActionButton = styled.TouchableOpacity`
	height: 36px;
	width: 36px;
	background-color: #1157b9;
	border-radius: 18px;
	align-items: center;
	justify-content: center;
`;
