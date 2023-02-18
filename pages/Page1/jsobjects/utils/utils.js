export default {
	rated: () => {
		const rating = ['TVMA', 'PG', 'PG-13'];
		return rating.map(r => ({label: r, value: r}))
	}
}