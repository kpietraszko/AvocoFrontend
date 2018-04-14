import axios from 'axios';

export const register = (form) => {
	const region = form.Region.value === "Województwo" ?
		null : form.Region.value;
	const registrationData = {
		FirstName: form.Name.value,
		LastName: form.Surname.value,
		Region: region,
		EmailAddress: form.Email.value,
		Password: form.Password.value,
		ConfirmPassword: form.RepPassword.value
	}
	return axios.post("/authentication/register", registrationData)
}

export const login = (form) => {
	const loginData = {
		Email: form.Email.value,
		Password: form.Password.value
	};
	return axios.post("/authentication/login", loginData)
}