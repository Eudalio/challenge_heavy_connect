import React from 'react';
import {FlatList} from 'react-native';
import {observer} from 'mobx-react-lite';
import {
	Container,
	HeaderList,
	LabelList,
	CountLengthList,
	TractorBox,
	TractorPicture,
	TractorInfo,
	TractorName,
	TractorID,
	TractorStatus,
	TractorStatusText,
	TractorStatusColor,
} from './styles';
import {useStore} from '../../../stores';

export const TractorList = observer(() => {
	const {tractors: store} = useStore();
	const {tractors, countTractors} = store;
	const renderItem = ({item}) => (
		<TractorBox>
			<TractorPicture
				source={{
					uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
				}}
			/>
			<TractorInfo>
				<TractorName>{item.name}</TractorName>
				<TractorID>{item.id}</TractorID>
				<TractorStatus>
					<TractorStatusColor color="#FECA57" />
					<TractorStatusText>Need Repair</TractorStatusText>
				</TractorStatus>
			</TractorInfo>
		</TractorBox>
	);

	return (
		<>
			<Container>
				<HeaderList>
					<LabelList>Tractor List</LabelList>
					<CountLengthList>({countTractors} Itens)</CountLengthList>
				</HeaderList>
				<FlatList
					data={tractors}
					keyExtractor={item => item.key}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
				/>
			</Container>
		</>
	);
});
