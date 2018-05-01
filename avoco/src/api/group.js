import axios from 'axios';

export const createGroupApi = (form) => {
    var formData = new FormData();
    formData.append("GroupName", form.groupName.value);
    formData.append("GroupImage", form.groupImage.files[0]);
    formData.append("GroupDescription", form.groupDesc.value);

    return axios.post("/group/Create/", formData);
}
export const getGroupInfoApi = (groupId) => {
    return axios.get(`/group/${groupId}/GroupInfo`);
}
export const getGroupInterestsApi = (groupId) => {
    return axios.get(`/group/${groupId}/GroupInterests`);
}
export const getGroupImageApi = (groupId) => {
    return axios.get(`/group/${groupId}/Image`, { responseType: "blob" });
}