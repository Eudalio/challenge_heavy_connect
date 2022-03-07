import styled from 'styled-components/native';

import {Container} from '../../components/Icon/style';

export const HeaderBar = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Icon = styled(Container)`
	position: absolute;
	z-index: 1;
`;

export const HeaderBarText = styled.Text`
	flex: 1;
	text-align: center;
	font-size: 22px;
	font-weight: 600;
	letter-spacing: 0.9px;
	color: #fff;
`;

export const ContentDetails = styled.View`
	background-color: ${props => props.theme.colors.background};
	padding: ${props => `${props.theme.spacing.default}px`};
	height: ${props => `${props.theme.spacing.screenHeight * 0.8}px`};
`;

export const TractorItem = styled.View`
	background-color: ${props => props.theme.colors.white};
	flex-direction: column;
	align-items: center;
	height: 120px;
	border-radius: 15px;
	margin-bottom: ${props => `${props.theme.spacing.default}px`};
	padding: ${props => `${props.theme.spacing.default}px`};
	margin-top: -40px;
`;

export const SectionTractorPicture = styled.View`
	background-color: #d3e0f4;
	height: 70px;
	width: 70px;
	padding: 10px;
	border-radius: 12px;
	margin-right: 15px;
	margin-top: -40px;
	position: absolute;
`;

export const TractorItemImage = styled.Image`
	height: 100%;
	width: 100%;
`;

export const TractorItemContent = styled.View`
	flex-direction: row;
	margin-top: 25px;
	flex: 1;
	width: 100%;
	justify-content: space-between;
`;

export const TractorItemContentInfos = styled.View`
	flex-direction: column;
	flex: 1;
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

export const TractorItemContentAction = styled.View`
	flex-direction: column;
	align-self: flex-end;
	justify-content: space-between;
`;

export const TractorActionButton = styled.TouchableOpacity`
	height: 36px;
	width: 36px;
	background-color: #1157b9;
	border-radius: 18px;
	align-items: center;
	justify-content: center;
`;

export const TractorInpections = styled.View`
	flex: 1;
	background-color: ${props => props.theme.colors.white};
	border-radius: 15px;
	box-shadow: 0px 3px 6px #0000000d;
	margin-bottom: ${props => `${props.theme.spacing.default}px`};
`;

export const TractorInpectionsHeader = styled.View`
	background-color: #d3e0f4;
	border-top-left-radius: ${props => `${props.theme.spacing.default}px`};
	border-top-right-radius: ${props => `${props.theme.spacing.default}px`};
	flex-direction: row;
	align-items: center;
	height: 56px;
	margin-bottom: ${props => `${props.theme.spacing.default}px`};
`;

export const TractorInpectionsHeaderTitle = styled.Text`
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 14px;
	flex: 1;
	letter-spacing: 0.7px;
	color: #30336b;
`;

export const IconRight = styled(Icon)`
	background-color: #2f35421f;
	position: absolute;
	right: ${props => `${props.theme.spacing.default}px`};
`;

export const TractorInpectionsContent = styled.View`
	align-items: center;
	width: 100%;
	flex: 1;
`;

export const DoneButton = styled.TouchableOpacity`
	background-color: ${props => props.theme.colors.btnColor};
	border-radius: 28px;
	box-shadow: 0px 1px 3px #00000029;
	align-items: center;
	justify-content: center;
	height: 50px;
`;

export const DoneButtonText = styled.Text`
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 1.62px;
	font-weight: 600;
	font-size: 18px;
`;

export const AddInspectionButton = styled.TouchableOpacity`
	background-color: #2f3542;
	border-radius: 18px;
	align-items: center;
	justify-content: center;
	height: 36px;
	width: 60%;
	margin-bottom: 30px;
`;

export const AddInspectionButtonText = styled(DoneButtonText)`
	letter-spacing: 0.7px;
	font-weight: 600;
	font-size: 14px;
`;
