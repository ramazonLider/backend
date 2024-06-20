from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name="home"),
    path('menu/', menu, name="menu"),
    path('meals/', meals, name="meals"),
    path('cart/', cart, name="cart"),
]