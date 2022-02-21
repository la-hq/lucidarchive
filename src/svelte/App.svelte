<script lang="ts">
	import Thumb from "./Thumb.svelte";
</script>

<div class="grid">
	{#each Array(10) as _}
		<Thumb album={{date: '2020-20-20', title: 'The Album', pseudonym: 'Pseudonym', covers: {full: 'http://i.imgur.com/upwcFUN.jpg'}}} coverKey="full" />
		<Thumb album={{date: '2020-20-20', title: 'The Album', pseudonym: 'Pseudonym', covers: {full: 'http://i.imgur.com/jVbbDKc.jpg'}}} coverKey="full" />
		<Thumb album={{date: '2020-20-20', title: 'The Album', pseudonym: 'Pseudonym', covers: {full: 'http://i.imgur.com/4BT9rwt.jpg'}}} coverKey="full" />
	{/each}
</div>

<style lang="scss">
	.grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1px;
	}
</style>
