export default {
	myVar1: [],
	myVar2: {},
	updateStatus: () => {
		storeValue('tableIndex',application_table.selectedRowIndex)
		updateApplicationStatus.run(() => getApplications.run(), () => {})
	}
}