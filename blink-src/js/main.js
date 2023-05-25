/*
*   Javascript principal con la estructura básica del estilo
*/

import ckeStyles from './cke_styles';
import overrides from './overrides';

(function (blink) {
	'use strict';

	var Classic2023Style = function () {
		blink.theme.styles["classic"].apply(this, arguments);
	}

	Classic2023Style.prototype = {
		parent: blink.theme.styles["classic"].prototype,
		bodyClassName: 'content_type_clase_classic2023',
		extraPlugins: ['image2'],
		ckEditorStyles: {
			name: 'classic2023',
			styles: ckeStyles
		},

		init: function() {
			// Heredo de otro estilo
			this.parent.init.call(this.parent, this);
			this.removeFinalSlide();
		},
		...overrides
	};

	Classic2023Style.prototype = _.extend({}, new blink.theme.styles["classic"](), Classic2023Style.prototype);

	blink.theme.styles['classic2023'] = Classic2023Style;
})( blink );
