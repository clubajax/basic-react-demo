/**
 * Created by jjones on 9/18/17.
 */

import forEach from 'lodash/forEach';

const preload = (imageCollection) => {
	forEach(imageCollection, (src) => {
		const image = new Image();
		image.src = src;
	});
};

export default preload;