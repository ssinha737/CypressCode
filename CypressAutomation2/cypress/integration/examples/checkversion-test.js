/// <reference types="cypress" />


const product = "https://test.sports"
var alllabelnames= ["pa.betmgm","sportingbet","bwin","gamebookers","partypoker","premium","nj.betmgm","partycasino",
"co.betmgm","wv.betmgm","in.betmgm",,"ia.betmgm","borgataonline","br.betboo","tn.betmgm","il.betmgm","mi.betmgm","va.betmgm"]
var domain =['com','de']
var bwinnoncomdedomain = ['be','it','fr','gr','dk','se','es','ru','co']
var delabels = ["bwin","sportingbet","ladbrokes","bpremium","gamebookers"]
var sbnoncomdedomain = ['co.za','gr','ro']
var misclabels=["giocodigitale.it","sh.bwin.de","vistabet.gr"]

describe("Find current version for all labels in FVT env ",()=>{
  it(`will get  version for all .com labels in FVT`, () => {
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
    
    it(`will get  version for all .de labels in FVT`, () => {
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

    it(`will get  version for all non .com and .de bwin labels in FVT`, () => {  
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


      it(`will get  version for all non .com and .de sportingbet labels in FVT`, () => {  
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


        it(`will get  version for misc labels in FVT `, () => {  
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
            
       
   

        



