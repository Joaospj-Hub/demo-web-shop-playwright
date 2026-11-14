from pages.register_page import RegisterPage
from test_data import get_valid_registration_data

def test_open_registration_page(page):
   register_page = RegisterPage(page)
   register_page.open()
   assert "Register" in page.title()

def test_ct_ins_004_valid_registration(page):
   register_page = RegisterPage(page)
   register_page.open()
   data = get_valid_registration_data()
   register_page.register(
       first_name=data["first_name"],
       last_name=data["last_name"],
       email=data["email"],
       password=data["password"]
   )
   register_page.submit()
   assert page.get_by_text(
       "Your registration completed"
   ).is_visible()

def test_register_without_first_name(page):
   register_page = RegisterPage(page)
   register_page.open()
   data = get_valid_registration_data()
   data["first_name"] = ""
   register_page.register(
       first_name=data["first_name"],
       last_name=data["last_name"],
       email=data["email"],
       password=data["password"]
   )
   register_page.submit()
   assert page.get_by_text(
       "First name is required."
   ).is_visible()

def test_ct_ins_005_different_password_confirmation(page):
   register_page = RegisterPage(page)
   register_page.open()
   data = get_valid_registration_data()
   register_page.register(
       first_name=data["first_name"],
       last_name=data["last_name"],
       email=data["email"],
       password="123456"
   )
   register_page.page.locator("#ConfirmPassword").fill("123457")
   register_page.submit()
   assert page.get_by_text(
       "The password and confirmation password do not match."
   ).is_visible()
   assert page.locator("#register-button").is_visible()


def test_ct_ins_001_short_password(page):
   register_page = RegisterPage(page)
   register_page.open()
   data = get_valid_registration_data()
   register_page.register(
       first_name=data["first_name"],
       last_name=data["last_name"],
       email=data["email"],
       password="12345"
   )
   register_page.submit()
   assert page.get_by_text(
       "The password should have at least 6 characters."
   ).is_visible()
   assert page.locator("#register-button").is_visible()