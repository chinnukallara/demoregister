import { Given,When,Then } from "@wdio/cucumber-framework";
import demoregisterpage from "../pageobjects/demoregisterpage";
Given(/^I am on the Register page$/,async()=>{

await demoregisterpage.openbrowser();
})
When(/^I Enter the details$/,async()=>{
    await demoregisterpage.login();
    
})
Then(/^I enter a valid page$/,async()=>{
    await demoregisterpage.message();
    
})
