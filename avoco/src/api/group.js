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
export const newPostApi = (groupId, postContent) => {
    var form = new FormData();
    form.append("postContent", postContent); //zwykły json nie działa, bo akcja przyjmuje string a nie model
    return axios.post(`/group/${groupId}/AddPost`, form);
}
export const getPostsApi = (groupId) => {
    return axios.get(`/group/${groupId}/Posts`);
}
export const deletePostApi = (postId) => {
    return axios.delete(`/group/deletePost/${postId}`);
}
export const newCommentApi = (postId, comment) => {
    var form = new FormData();
    form.append("comment", comment);
    return axios.post(`/group/AddComment/${postId}`, form);
}
export const deleteCommentApi = (commentId) => {
    return axios.delete(`/group/deleteComment/${commentId}`);
}
export const userInGroupApi = (groupId) => {
    return axios.get(`/group/${groupId}/UserInGroup`);
}
export const joinGroupApi = (groupId) => {
    return axios.put(`/group/${groupId}/JoinGroup`);
}
export const leaveGroupApi = (groupId) => {
    return axios.put(`/group/${groupId}/LeaveGroup`);
}
export const getEventsApi = (groupId) => {
    return axios.get(`/group/${groupId}/Events`);
}
export const getAllGroupsApi = () => {
    return axios.get("/group/AllGroups");
}