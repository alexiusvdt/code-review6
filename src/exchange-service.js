export default class ExchangeService {  
  static async exchangeMoney(currIn, currOut, amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currIn}/${currOut}/${amount}`);
      const jsonResponse = await response.json();
      //response interface returns true if the response returned successfully
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonResponse;
    } catch(error) {
      return error;
    }
  }
}