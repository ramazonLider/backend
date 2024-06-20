from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255)
    meals = models.ManyToManyField('Meal')

    def __str__(self) -> str:
        return self.name

class Meal(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')
    price = models.IntegerField()

    def __str__(self) -> str:
        return self.name