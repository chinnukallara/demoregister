class demoregister
{
   
    get email1(){return $("/html/body/div/div/div[2]/input")}
    get password1(){return $("/html/body/div/div/div[3]/input")}
    get login1(){return $("//*[@id='enterbtn']")}
    async openbrowser()
    {
        await browser.url("https://demo.automationtesting.in/SignIn.html")
    }
    async login(username,password)
    {
       await this.email1.setValue(username)
       await this.password1.setValue(password)
       await this.login1.click();

    }
    async message()
    {
        var a="invalid"
        await console.log(a)
    }

}export default new demoregister();