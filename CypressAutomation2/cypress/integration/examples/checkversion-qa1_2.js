/// <reference types="cypress" />

var product = ["https://qa1.sports","https://qa2.sports"] 
var alllabelnames= ["pa.betmgm","va.betmgm","sportingbet","bwin","gamebookers","partypoker","premium","nj.betmgm","partycasino"
,"co.betmgm","wv.betmgm","in.betmgm","borgataonline","br.betboo","tn.betmgm","il.betmgm","mi.betmgm","ia.betmgm"]
var domain =['com','de']
var bwinnoncomdedomain = ['be','it','fr','gr','dk','se','es','ru','co']
var delabels = ["bwin","sportingbet","ladbrokes","bpremium","gamebookers"]
var sbnoncomdedomain = ['co.za','gr','ro']
var misclabels=["giocodigitale.it","sh.bwin.de","vistabet.gr"]

describe("Find current version for all labels in QA X env ",()=>{
  it(`will get  version for all .com labels in QA env`, () => 
{
      for(let i=0;i<product.length;i++) 
   {
          cy.log("Curent run env is\t" + product[i] )
          for(let j=0;j<alllabelnames.length;j++)
          {
                  cy.request({
                   url: `${product[i]}.${alllabelnames[j]}.${domain[0]}/site/version`,
                   }).as('version');
        
                    cy.get('@version').then((userResp) => {
                    expect(userResp.status).to.be.equal(200)
                    const ver = userResp.body;
                    cy.log('LabelName is\t'+alllabelnames[j]+'.'+domain[0])
                    cy.log('Version is\t'+ver)
                     })
                
                
     
          }
    }
     
})
 
it(`will get  version for  all .de labels in QA env`, () => 
{
      for(let i=0;i<product.length;i++) 
   {
          cy.log("Curent run env is\t" + product[i] )
          for(let j=0;j<delabels.length;j++)
          {
                  cy.request({
                   url: `${product[i]}.${delabels[j]}.${domain[1]}/site/version`,
                   }).as('version');
        
                    cy.get('@version').then((userResp) => {
                    expect(userResp.status).to.be.equal(200)
                    const ver = userResp.body;
                    cy.log('LabelName is\t'+delabels[j]+'.'+domain[1])
                    cy.log('Version is\t'+ver)
                     })
                
                
     
          }
    }
     
})


it(`will get  version for all non .com and .de bwin labels in QA env`, () => 
{
      for(let i=0;i<product.length;i++) 
   {
          cy.log("Curent run env is\t" + product[i] )
          for(let j=0;j<bwinnoncomdedomain.length;j++)
          {
                  cy.request({
                   url: `${product[i]}.${alllabelnames[3]}.${bwinnoncomdedomain[j]}/site/version`,
                   }).as('version');
        
                    cy.get('@version').then((userResp) => {
                    expect(userResp.status).to.be.equal(200)
                    const ver = userResp.body;
                    cy.log('LabelName is\t'+alllabelnames[3]+'.'+bwinnoncomdedomain[j])
                    cy.log('Version is\t'+ver)
                     })
                
                
     
          }
    }
     
})

it(`will get  version for all non .com and .de sportingbet labels in QA env`, () => 
{
      for(let i=0;i<product.length;i++) 
   {
          cy.log("Curent run env is\t" + product[i] )
          for(let j=0;j<sbnoncomdedomain.length;j++)
          {
                  cy.request({
                   url: `${product[i]}.${alllabelnames[2]}.${sbnoncomdedomain[j]}/site/version`,
                   }).as('version');
        
                    cy.get('@version').then((userResp) => {
                    expect(userResp.status).to.be.equal(200)
                    const ver = userResp.body;
                    cy.log('LabelName is\t'+alllabelnames[2]+'.'+sbnoncomdedomain[j])
                    cy.log('Version is\t'+ver)
                     })
                
                
     
          }
    }

})

it("will get  version for misc labels labels in QA env", () => 
{
      for(let i=0;i<product.length;i++) 
   {
          cy.log("Curent run env is\t" + product[i] )
          for(let j=0;j<misclabels.length;j++)
          {
                  cy.request({
                   url: `${product[i]}.${misclabels[j]}/site/version`,
                   }).as('version');
        
                    cy.get('@version').then((userResp) => {
                    expect(userResp.status).to.be.equal(200)
                    const ver = userResp.body;
                    cy.log('LabelName is\t'+misclabels[j])
                    cy.log('Version is\t'+ver)
                     })
                
                
     
          }
    }
     
})


  })
            
       
   

        



