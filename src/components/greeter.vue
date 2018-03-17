<template>
	<h1> hai {{ name }} </h1>
</template>

<script>
export default {
	props: ['name'],
	data() {
		return {
			nama: ''
		}
	},
	methods: {
		click_child() {
			alert('succes call chilld')
		},
		click_secound() {
			alert('success two')
		}
	},
	created() {
		this.$parent.$on('click', this.click_child)
	}
}
</script>