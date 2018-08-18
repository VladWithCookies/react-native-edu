import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

const AppFooter = ({
	activeTab, setActiveTab,
}) => (
	<Footer>
		<FooterTab>
			<Button
				onPress={() => setActiveTab('catch')}
				active={activeTab === 'catch'}
			>
				<Text>Ловить</Text>
			</Button>
			<Button
				onPress={() => setActiveTab('watch')}
				active={activeTab === 'watch'}
			>
				<Text>Смотреть</Text>
			</Button>
		</FooterTab>
	</Footer>
);
export default AppFooter;
