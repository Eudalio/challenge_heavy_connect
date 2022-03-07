import React, {useRef} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import FAIcons from 'react-native-vector-icons/FontAwesome5';
import {observer} from 'mobx-react-lite';

import {useStore} from '~/stores/hooks';
import {Header} from '~/ui/components/Header';
import {ModalScreen} from '~/ui/components/Modal';
import {ModalInspection} from '~/ui/pages/Modal/ModalInspection';
import {ModalTractor} from '~/ui/pages/Modal/ModalTractor';
import * as S from './styles';
import {statusColors} from '~/utils/statusToColor';
import {InspectionItem} from '~/ui/components/InspectionItem';
import {useNavigation} from '@react-navigation/native';

export const Details = observer(() => {
	const modalEditTractor = useRef(null);
	const modalInspectionRegister = useRef(null);
	const navigation = useNavigation();
	const {tractors: store} = useStore();
	const {currentTractor, countTractorInspections, getLastStatusInspection} =
		store;
	const {name, id, inspections} = currentTractor;

	const renderItem = ({item}) => <InspectionItem {...item} />;

	return (
		<>
			<SafeAreaView>
				<Header>
					<S.HeaderBar>
						<S.Icon>
							<Icons
								name="arrow-back-outline"
								color={'#fff'}
								size={28}
								onPress={() => navigation.goBack()}
							/>
						</S.Icon>
						<S.HeaderBarText>Details</S.HeaderBarText>
					</S.HeaderBar>
				</Header>
				<S.ContentDetails>
					<S.TractorItem>
						<S.SectionTractorPicture>
							<S.TractorItemImage
								source={require('../../../assets/icons/tractor.jpeg')}
								resizeMode="contain"
							/>
						</S.SectionTractorPicture>
						<S.TractorItemContent>
							<S.TractorItemContentInfos>
								<S.TractorName>{name}</S.TractorName>
								<S.TractorID>{id}</S.TractorID>
								<S.TractorStatus>
									<S.TractorStatusColor
										color={statusColors[getLastStatusInspection]}
									/>
									<S.TractorStatusText>
										{getLastStatusInspection}
									</S.TractorStatusText>
								</S.TractorStatus>
							</S.TractorItemContentInfos>
							<S.TractorItemContentAction>
								<S.TractorActionButton
									onPress={() => modalEditTractor.current.open()}>
									<FAIcons style={{color: '#fff'}} name="pen" size={18} />
								</S.TractorActionButton>
								<ModalScreen ref={modalEditTractor}>
									<ModalTractor closeModal={modalEditTractor} type="edit" />
								</ModalScreen>
							</S.TractorItemContentAction>
						</S.TractorItemContent>
					</S.TractorItem>
					<S.TractorInpections>
						<S.TractorInpectionsHeader>
							<S.TractorInpectionsHeaderTitle>
								tractor inspections
							</S.TractorInpectionsHeaderTitle>
							<S.IconRight>
								<Text>{countTractorInspections}</Text>
							</S.IconRight>
						</S.TractorInpectionsHeader>
						<S.TractorInpectionsContent>
							<S.AddInspectionButton
								onPress={() => modalInspectionRegister.current.open()}>
								<S.AddInspectionButtonText>
									+ add inspection
								</S.AddInspectionButtonText>
								<ModalScreen ref={modalInspectionRegister}>
									<ModalInspection
										closeModal={modalInspectionRegister}
										type="register"
									/>
								</ModalScreen>
							</S.AddInspectionButton>
							<FlatList
								style={{width: '100%'}}
								data={[...inspections].reverse()}
								keyExtractor={item => item.id}
								renderItem={renderItem}
								showsVerticalScrollIndicator={false}
							/>
						</S.TractorInpectionsContent>
					</S.TractorInpections>
					<S.DoneButton onPress={() => navigation.goBack()}>
						<S.DoneButtonText>done</S.DoneButtonText>
					</S.DoneButton>
				</S.ContentDetails>
			</SafeAreaView>
		</>
	);
});
