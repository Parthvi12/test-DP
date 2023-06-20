export default {

	socialLinks: {
		facebook: 'https://www.facebook.com/',
		twitter: 'https://twitter.com/',
		linkedIn: 'https://www.linkedin.com/company/'
	},

	openLink: (linkType='linkedIn') => {
		if(!clearbit_api.data.company[linkType]?.handle){
			showAlert(`API cannot locate the organization's ${linkType} handle`);
			return `no ${linkType} link`
		}
		navigateTo(`${this.socialLinks[linkType]}${clearbit_api.data.company[linkType]?.handle}`, {}, 'NEW_WINDOW')
	}

}