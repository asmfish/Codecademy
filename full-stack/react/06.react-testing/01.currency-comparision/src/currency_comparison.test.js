import CurrencyComparison from './currency_comparison.js';

// Task 10: Import and mock fetchData
import fetchData from './utils/fetch-data.js';

jest.mock('./utils/fetch-data.js');//Telljest to mock the file
const testSalary = new CurrencyComparison(50000)
    
// Task 1: Create a test for testSalary.currencyConversion below
it('Gets conversion rate for currency', () =>{
    //1. Arrange
    const currencyCode1 = 'CAD'
    const expectedValue1 = 1.21
    const currencyCode2 = 'EUR'
    const expectedValue2 = .82
    const rates = {
      "MXN": 19.9021,
      "CAD": 1.2121, 
      "EUR": .8235  
    }

    //2. Act
    const actualValue1 = testSalary.currencyConversion(rates, currencyCode1);
    const actualValue2 = testSalary.currencyConversion(rates, currencyCode2);

    //3. Assert/Verify
    expect(actualValue1).toBe(expectedValue1);
    expect(actualValue2).toBe(expectedValue2);
})

// Task 5: Create a test for testSalary.hourlyPayUSD below
it('Gets hourly pay in USD for given rate', () =>{
  //1. Arrange
  const exchangeRate = 1.21;
  const expectedValue = 20.66;

  //2. Act
  const actualValue = testSalary.hourlyPayUSD(exchangeRate);

  //3. Assert/Verify
  expect(actualValue).toBe(expectedValue);
})


// Task 6: Complete this test!
it("Respond with different salaries based on currency", (done) => {
  //1. Arrange
  const currency = "CAD"
  const exchangeRate = 1.21
  const expectedValue = {
    USD: 25,
    CAD: 20.66,
    salary: 50000,
  }

  //2. Act
  testSalary.response(currency, exchangeRate, (result) => {
    //3. Assert
    try{
      expect(result).toEqual(expectedValue);
      done();
    }
    catch(error){
      done(error);
    }
  })
})

// Task 10 & 11: Complete this test!
it("Receives current currency exchange data", async ()=>{
  //1. arrange
  const mockResponse = {
    status : "Mock",
    data: {
      "base": "USD",
      "rates": {
        "CCD": 50,
      },
      "date": "2021-05-17"
    }
  }
  const expectedValue = [{"CCD": 50}, "Mock"];

  // Mock the resolved value of fetchData
  /**If do not mock test will fail as the mock function returns empty data 
   * { 
      status: "Mock", 
      data: {} 
    } 
  */
  fetchData.mockResolvedValueOnce(mockResponse);

  
  //2. act
  const actualValue = await testSalary.fetchCurrentExchange() 
  
  //3. assert
  expect(actualValue).toEqual(expectedValue);
})
