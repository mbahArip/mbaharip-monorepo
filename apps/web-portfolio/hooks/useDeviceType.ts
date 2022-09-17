import { useState, useEffect } from 'react';
const useDeviceType = () => {
	const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>('desktop');

	useEffect(() => {
		var isMobile = navigator.userAgent.match(
			/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i,
		);
		if (isMobile) {
			setDeviceType('mobile');
		} else {
			setDeviceType('desktop');
		}
	}, []);

	return {
		deviceType,
		isDesktop: deviceType === 'desktop',
	};
};
export default useDeviceType;
