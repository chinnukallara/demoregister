class demoregister
{
    get fname(){return $("//*[@id='basicBootstrapForm']/div[1]/div[1]/input")}
    get lname(){return $("//*[@id='basicBootstrapForm']/div[1]/div[2]/input")}
    get address(){return $("//*[@id='basicBootstrapForm']/div[2]/div/textarea")}
    get email(){return $("//*[@id='eid']/input")}
    get phno(){return $("//*[@id='basicBootstrapForm']/div[4]/div/input")}
    get female(){return $("//*[@id='basicBootstrapForm']/div[5]/div/label[2]/input")}
    get cricket(){return $("//*[@id='checkbox1']")}
    get movies(){return $("//*[@id='checkbox3']")}
    get language(){return $("//*[@id='msdd']/div[2]/span")}
    get skills(){return $("//*[@id='Skills']")}
    get country(){return $("//*[@id='countries']")}
    get country1(){return $("/html/body/span/span/span[1]/input")}
    get year(){return $("//*[@id='yearbox']")}
    get month(){return $("//*[@id='basicBootstrapForm']/div[11]/div[2]/select")}
    get day(){return $("//*[@id='daybox']")}
    get password(){return $("//*[@id='firstpassword']")}
    get confirm(){return $("//*[@id='secondpassword']")}
    get submit(){return $("//*[@id='submitbtn']")}
    get email1(){return $("/html/body/div/div/div[2]/input")}
    get password1(){return $("/html/body/div/div/div[3]/input")}
    get login1(){return $("//*[@id='enterbtn']")}
    async openbrowser()
    {
        await browser.url("https://demo.automationtesting.in/SignIn.html")
    }
    async login()
    {
       await this.email1.setValue("chinnu@gmail.com")
       await this.password1.setValue("chinnu")
       await this.login1.click();

    }
    async message()
    {
        var a="invalid"
        await console.log(a)
    }

}export default new demoregister();