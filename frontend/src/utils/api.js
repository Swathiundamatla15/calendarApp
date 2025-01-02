const API_URL = 'http://localhost:5000/api'; // Ensure this URL is correct

// Fetch communications from the server
export const fetchCommunications = async () => {
  try {
    const response = await fetch(`${API_URL}/communications`);
    if (!response.ok) {
      const errorMessage = `Failed to fetch communications: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Failed to fetch communications due to network error');
  }
};

// Fetch companies from the server
export const fetchCompanies = async () => {
  try {
    const response = await fetch(`${API_URL}/companies`);
    if (!response.ok) {
      const errorMessage = `Failed to fetch companies: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Failed to fetch companies due to network error');
  }
};

// Fetch a single company by ID
export const fetchCompanyById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/companies/${id}`);
    if (!response.ok) {
      const errorMessage = `Failed to fetch company: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Failed to fetch company due to network error');
  }
};

// Add a new company
export const addCompany = async (companyData) => {
  try {
    const response = await fetch(`${API_URL}/companies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    });
    if (!response.ok) {
      const errorMessage = `Failed to add company: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Failed to add company due to network error');
  }
};

// Update an existing company
export const updateCompany = async (companyId, companyData) => {
  try {
    const response = await fetch(`${API_URL}/companies/${companyId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    });
    if (!response.ok) {
      const errorMessage = `Failed to update company: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Failed to update company due to network error');
  }
};

// Delete a company
export const deleteCompany = async (companyId) => {
  try {
    const response = await fetch(`${API_URL}/companies/${companyId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorMessage = `Failed to delete company: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Failed to delete company due to network error');
  }
};

// Fetch communication methods from the server
export const fetchCommunicationMethods = async () => {
  try {
    const response = await fetch(`${API_URL}/communicationMethods`);
    if (!response.ok) {
      const errorMessage = `Failed to fetch communication methods: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error(
      'Failed to fetch communication methods due to network error'
    );
  }
};

// Fetch a single communication method by ID
export const fetchCommunicationMethodById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/communicationMethods/${id}`);
    if (!response.ok) {
      const errorMessage = `Failed to fetch communication method: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error(
      'Failed to fetch communication method due to network error'
    );
  }
};

// Add a new communication method
export const addCommunicationMethod = async (methodData) => {
  try {
    const response = await fetch(`${API_URL}/communicationMethods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(methodData),
    });
    if (!response.ok) {
      const errorMessage = `Failed to add communication method: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Failed to add communication method due to network error');
  }
};

// Update an existing communication method
export const updateCommunicationMethod = async (methodId, methodData) => {
  try {
    const response = await fetch(
      `${API_URL}/communicationMethods/${methodId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(methodData),
      }
    );
    if (!response.ok) {
      const errorMessage = `Failed to update communication method: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error(
      'Failed to update communication method due to network error'
    );
  }
};

// Delete a communication method
export const deleteCommunicationMethod = async (methodId) => {
  try {
    const response = await fetch(
      `${API_URL}/communicationMethods/${methodId}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      const errorMessage = `Failed to delete communication method: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error(
      'Failed to delete communication method due to network error'
    );
  }
};

// Log a new communication
export const logCommunication = async (communicationData) => {
  try {
    const response = await fetch(`${API_URL}/communications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(communicationData),
    });
    if (!response.ok) {
      const errorMessage = `Failed to log communication: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Failed to log communication due to network error');
  }
};
