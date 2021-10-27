/// <reference types="cypress" />


const product = "https://sports"
var alllabelnames= ["pa.betmgm","mi.betmgm","sportingbet","bwin","partycasino","gamebookers","partypoker","premium","nj.betmgm"
,"co.betmgm","wv.betmgm","in.betmgm","borgataonline","br.betboo","tn.betmgm","il.betmgm","ia.betmgm"]
var domain =['com','de']
var bwinnoncomdedomain = ['be','it','fr','gr','dk','se','es','ru','co']
var delabels = ["bwin","sportingbet","ladbrokes","bpremium","gamebookers"]
var sbnoncomdedomain = ['co.za','gr','ro']
var misclabels=["giocodigitale.it","sh.bwin.de","vistabet.gr"]

describe("Find current version for all labels in prod ",()=>{
  it(`will get  version for all .com labels in prod`, () => {
    cy.log("Curent run env is\t" + product )
      for(let i=0;i<alllabelnames.length;i++){
        cy.request({
          url: `${product}.${alllabelnames[i]}.${domain[0]}/site/version`,
        }).as('version');
        
        cy.get('@version').then((userResp) => {
          expect(userResp.status).to.be.equal(200)
          const ver = userResp.body;
          cy.log('LabelName is\t'+alllabelnames[i]+'.'+domain[0])
          cy.log('Version is\t'+ver)
          
          
        });
      }
     
    })
    
    it(`will get  version for all .de labels in prod`, () => {
      for(let i=0;i<delabels.length;i++){
        cy.request({
          url: `${product}.${delabels[i]}.${domain[1]}/site/version`,
        }).as('version');
  
        cy.get('@version').then((userResp) => {
        expect(userResp.status).to.be.equal(200)
        const ver = userResp.body;
         cy.log('LabelName is\t'+delabels[i]+'.'+domain[1])
          cy.log('Version is\t'+ver)
                    
        });
      }
     
    })

    it(`will get  version for all non .com and .de bwin labels in prod`, () => {  
      for( let i=0;i<bwinnoncomdedomain.length;i++){
          cy.request({
          url: `${product}.${alllabelnames[3]}.${bwinnoncomdedomain[i]}/site/version`,
        }).as('version');
  
        cy.get('@version').then((userResp) => {
          expect(userResp.status).to.be.equal(200)
          const ver = userResp.body;
          cy.log('LabelName is\t'+alllabelnames[3]+'.'+bwinnoncomdedomain[i])
          cy.log('Version is\t'+ver)
        
        }) 
       
    } 
      
      })


      it(`will get  version for all non .com and .de sportingbet labels in prod`, () => {  
        for( let i=0;i<sbnoncomdedomain.length;i++){
            cy.request({
            url: `${product}.${alllabelnames[2]}.${sbnoncomdedomain[i]}/site/version`,
          }).as('version');
    
          cy.get('@version').then((userResp) => {
            expect(userResp.status).to.be.equal(200)
            const ver = userResp.body;
            cy.log('LabelName is\t'+alllabelnames[2]+'.'+sbnoncomdedomain[i])
            cy.log('Version is\t'+ver)
            
          }) 
         
      } 
        
        })


        it(`will get  version for misc labels in prod`, () => {  
          for( let i=0;i<misclabels.length;i++){
              cy.request({
              url: `${product}.${misclabels[i]}/site/version`,
            }).as('version');
      
            cy.get('@version').then((userResp) => {
              expect(userResp.status).to.be.equal(200)
              const ver = userResp.body;
              cy.log('LabelName is\t'+ misclabels[i])
              cy.log('Version is\t'+ ver)
              
            }) 
           
        } 
          
          })
    
  })
            
       
   

        


