import 'normalize.css';
import './css/index.scss';

import App from './svelte/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;