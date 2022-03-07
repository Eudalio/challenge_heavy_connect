import React from 'react';
import {FlatList} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useStore} from '~/stores/hooks';
import {TractorItem} from '~/ui/components/TractorItem';
import * as S from './styles';

export const TractorList = observer(() => {
	const {tractors: store} = useStore();
	const {tractors, countTractors} = store;

	const renderItem = ({item}) => <TractorItem {...item} />;

	return (
		<>
			<S.Container>
				<S.HeaderList>
					<S.LabelList>Tractor List</S.LabelList>
					<S.CountLengthList>({countTractors} Itens)</S.CountLengthList>
				</S.HeaderList>
				<FlatList
					data={tractors}
					keyExtractor={item => item.fieldKey.toString()}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
				/>
			</S.Container>
		</>
	);
});
