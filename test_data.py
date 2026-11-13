from uuid import uuid4

def get_valid_registration_data():
   return {
       "first_name": "Stephane",
       "last_name": "Test",
       "email": f"stephane_{uuid4().hex[:8]}@test.com",
       "password": "Test1234!"
   }

INVALID_REGISTRATION_DATA = {
   "empty_first_name": {
       "first_name": "",
       "last_name": "Test"
   },
   "empty_email": {
       "email": ""
   }
}