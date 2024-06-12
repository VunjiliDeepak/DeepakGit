const{test,expect}= require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  
   
  });