describe("Navlungo ilk test", () => {
    it("ilk test", () => {
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://qa.navlungo.com/"); 
      cy.get(".MuiButton-startIcon.MuiButton-iconSizeSmall.mui-style-16rzsu1").click()
      cy.get(".MuiInputBase-input.MuiOutlinedInput-input.mui-style-12qjalz").click().type("mirac10@test.com")
      cy.get(".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.mui-style-i2m634").click().type("Test123!")
      cy.get(".MuiBox-root.mui-style-xi606m").click()
      cy.get(".css-188swwf").click()
      cy.get("a[href='/ship/myShipments']").click()
      cy.get("a[href='/ship/myShipments/250336']").click()
      cy.get("#long-button").click()
      cy.get(".css-1grvuhi").click()
      cy.wait(25000)
      cy.get(".css-xtt9ce").click()
      cy.get("#long-button").click()
      cy.get(".css-1grvuhi").click()
      cy.get("#mui-11").click()
      cy.wait(8000)
      cy.get("#mui-12").click()
    });

  });