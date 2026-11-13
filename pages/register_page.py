from pages.base_page import BasePage

class RegisterPage(BasePage):
   def __init__(self, page):
       super().__init__(page)
   def open(self):
       self.navigate("https://demowebshop.tricentis.com/register")
   def register(self, first_name, last_name, email, password):
       self.page.locator("#gender-male").check()
       self.page.locator("#FirstName").fill(first_name)
       self.page.locator("#LastName").fill(last_name)
       self.page.locator("#Email").fill(email)
       self.page.locator("#Password").fill(password)
       self.page.locator("#ConfirmPassword").fill(password)
   def submit(self):
       self.page.locator("#register-button").click()