import api from './apiConfig.js'

export const getParties = async () => {
    try {
      const response = await api.get("/party/");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getParty = async (id) => {
    try {
      const response = await api.get(`/party/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const createParty = async (partyData) => {
    try {
      const response = await api.post("/party/", partyData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateParty = async (id, partyData) => {
    try {
      const response = await api.put(`/party/${id}/`, partyData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteParty = async (id) => {
    try {
      const response = await api.delete(`/party/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };