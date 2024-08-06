import LoginPage from '../pages/User/LoginPage';

describe('Login Test', () => {
    const loginPage = new LoginPage();
  
    it('should login with valid credentials', () => {
      loginPage.visit();
    });
  });