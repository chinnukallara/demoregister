import { Given,When,Then } from "@wdio/cucumber-framework";
import demoregisterpage from "../pageobjects/demoregisterpage";
Given(/^I am on the login page$/,async()=>{

await demoregisterpage.openbrowser();
})
When(/^I enter the (\w+) and (.+)$/,async(username,password)=>{
    await demoregisterpage.login(username,password);
    
})
Then(/^I enter a valid page$/,async()=>{
    await demoregisterpage.message();
  //  await demoregisterpage.openbrowser();
})
