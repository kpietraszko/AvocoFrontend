import axios from 'axios';

export const createGroupApi = (form) => {
    var formData = new FormData();
    formData.append("GroupName", form.groupName.value);
    formData.append("GroupImage", form.groupImage.files[0]);
    formData.append("GroupDescription", form.groupDesc.value);

    return axios.post("/group/Create/", formData);
}