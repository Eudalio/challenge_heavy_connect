import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const spacing = {
	default: 20,
	screenWidth: width,
	screenHeight: height,
};

export default spacing;
