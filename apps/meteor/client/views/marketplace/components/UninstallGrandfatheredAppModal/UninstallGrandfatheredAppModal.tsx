import { Button, Modal } from '@rocket.chat/fuselage';
import React from 'react';
import { useTranslation } from 'react-i18next';

import MarkdownText from '../../../../components/MarkdownText';
import type { MarketplaceRouteContext } from '../../hooks/useAppsCountQuery';

type UninstallGrandfatheredAppModalProps = {
	context: MarketplaceRouteContext;
	limit: number;
	appName: string;
	handleUninstall: () => void;
	handleClose: () => void;
};

const UninstallGrandfatheredAppModal = ({ context, limit, appName, handleUninstall, handleClose }: UninstallGrandfatheredAppModalProps) => {
	const { t } = useTranslation();

	return (
		<Modal>
			<Modal.Header>
				<Modal.HeaderText>
					<Modal.Title>{t('Uninstall_grandfathered_app', { appName })}</Modal.Title>
				</Modal.HeaderText>
				<Modal.Close onClick={handleClose} />
			</Modal.Header>
			<Modal.Content>
				<MarkdownText content={t('App_will_lose_grandfathered_status', { limit, context: context === 'private' ? context : '' })} />
			</Modal.Content>
			<Modal.Footer>
				<Modal.FooterControllers>
					<Button onClick={handleClose}>{t('Cancel')}</Button>
					<Button danger onClick={handleUninstall}>
						{t('Uninstall')}
					</Button>
				</Modal.FooterControllers>
			</Modal.Footer>
		</Modal>
	);
};

export default UninstallGrandfatheredAppModal;
