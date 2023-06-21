export default {
	storeDiscordWebhook: async () => {
		await storeValue('webhook_url', webhook_url.text);
		storeValue('webhook_url',webhook_url.text);
		showAlert('Discord Webhook URL saved! You can now proceed to the next Tab')
		return(appsmith.store.webhook_url)
	},
		storeGitHubRepo: async () => {
		await storeValue('repo_name', repo_name.text);
		storeValue('repo_name',repo_name.text);
		return(appsmith.store.repo_name)
	},
		storeRepoOwner: async () => {
		await storeValue('github_username', github_username.text);
		storeValue('github_username',github_username.text);
		return(appsmith.store.github_username)
	},
			storeAccessToken: async () => {
		await storeValue('access_token', access_token.text);
		storeValue('access_token',access_token.text);
		showAlert('GitHub API details saved! You can now close the Modal')
		return(appsmith.store.access_token)
	},
		storeInfo: async () => {
		await storeValue('webhook_url', webhook_url.text);
		await storeValue('repo_name', repo_name.text);
		await storeValue('github_username', github_username.text);
		await storeValue('access_token', access_token.text);
		showAlert('APIs have been set! You can now close the Modal')
	},
	message: () => {
		var apibody=GetRelease.data.body
		const modifiedBody= apibody.replace(/ *\([^)]*\) */g, "")
		return ((GetRelease.data.name) + " is out🎉 \n\n" + (modifiedBody) + "\n\nCheck the release out at " + (GetRelease.data.html_url) )
	},
		onOpen: async () => {
		if(appsmith.mode != "EDIT") {showModal('API_setup_modal')}
	},
	
		openSetup: async () => {
		if(appsmith.mode == "EDIT") {showModal('API_setup_modal')}
	},
}