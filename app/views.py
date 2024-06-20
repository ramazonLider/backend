from django.shortcuts import render
from .models import *

# Create your views here.
def home(request):
    return render(request, 'home.html')

def menu(request):
    categories = Category.objects.all()

    data = {
        'categories' : categories
    }
    return render(request, 'menu.html', data)

def meals(request):
    meals = Meal.objects.all()

    data = {
        'meals' : meals
    }
    return render(request, 'meals.html', data)

def cart(request):
    return render(request, 'cart.html')