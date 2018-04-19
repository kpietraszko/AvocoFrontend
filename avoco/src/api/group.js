import axios from 'axios';

export const createGroupApi = (form) => {
    const createGroupData = {
        GroupName: form.groupName.value,
        GroupImage: form.groupImage.files[0],
        GroupDescription: form.groupDesc.value
    }
    //console.log("Creating group", createGroupData);
    var formData = new FormData();
    formData.append("GroupName", form.groupName.value);
    formData.append("GroupImage", form.groupImage.files[0]);
    formData.append("GroupDescription", form.groupDesc.value);
    return axios.post("/group/Create/", formData);
/*     formData.append("GroupName", )
    return axios({
        method: 'post',
        url: '/group/Create/',
        data: createGroupData
    }); */
}