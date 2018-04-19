export const createGroupApi = (form) => {
    const createGroupData = {
        groupName: form.groupName.value,
        groupImage: form.groupImage.value,
        groupDesc: form.groupDesc.value
    }
    console.log("Creating group", createGroupData);
    //axios.post(`/group/Create/${createGroupData}`); //poprawic
}