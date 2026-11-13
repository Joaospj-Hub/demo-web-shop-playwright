from pages.register_page import RegisterPage
from test_data import get_valid_registration_data

def test_open_registration_page(page):
   register_page = RegisterPage(page)
   register_page.open()
   assert "Register" in page.title()

def test_register_new_user(page):
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