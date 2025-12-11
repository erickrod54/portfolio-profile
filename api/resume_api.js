import axios from 'axios';

/**Portfolio-erick - version 56.08 - resume api -
* Features:

    -→>  Resolving classic 'Mixed Content' issue

* Notes: here in the API, the 'API_HOST' is being
* switch from 'http' to 'https' so this back end 
* layer will match in protocol with the front end 
**/

const API_HOST = 'https://192.168.1.108:8080'
const API_BASE_URL = `${API_HOST}/api/resume`;

//1.- Fetch function ( Query ) 
export async function fetchResumeData() {
    const response = await axios.get(API_BASE_URL)
    return response.data;
}

//2.- Save Function ( Mutation for PUT /api/resume )
export async function saveResumeData(updatedData) {
    const response = await axios.put(API_BASE_URL, updatedData);
    return response.data;
}

//New functions for dynamic arrays

//3.- Add Experience fucntion ( Mutation for POST /api/experience )
export async function addExperience(newExperienceData) {
    //send the new experience object to the API
    const response = await axios.post(`${API_HOST}/api/experience`, newExperienceData);
    return response.data;
}

//4.- Delete Experience function ( Mutation for DELETE /api/experience/:index)
export async function deleteExperience(indexToDelete) {
    //sends the index in the url path
    const response = await axios.delete(`${API_HOST}/api/experience/${indexToDelete}`);
    //The API returns 204 No Content
    return response.data;
}