from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=200)
    year = models.CharField(max_length=10)
    episodes = models.CharField(max_length=20)
    age = models.CharField(max_length=16)
    desc = models.TextField()
    bg = models.ImageField(upload_to='bg/')
    thumb = models.ImageField(upload_to='thumb/')

    def __str__(self):
        return self.title
    
