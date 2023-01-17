from django.db import models
from django.urls import reverse
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime
import os
# Create your models here.


def get_path_img(request, filename):
    orginali_filename = filename
    newtime = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = "%s%s" % (newtime, orginali_filename)
    return os.path.join('upload/', filename)
# Create model with MPTTModel Category Product


class IntegerRangeField(models.IntegerField):
    def __init__(self, verbose_name=None, name=None, min_value=None, max_value=None, **kwargs):
        self.min_value, self.max_value = min_value, max_value
        models.IntegerField.__init__(self, verbose_name, name, **kwargs)

    def formfield(self, **kwargs):
        defaults = {'min_value': self.min_value, 'max_value': self.max_value}
        defaults.update(kwargs)
        return super(IntegerRangeField, self).formfield(**defaults)


class Category(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    slug = models.SlugField(max_length=120, null=False, blank=False)
    status = models.BooleanField(
        default=False, help_text='0=default , 1=hidden')
    tranding = models.BooleanField(
        default=False, help_text="0 = default , 1=Trading")
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=False, blank=False)
    slug = models.SlugField(max_length=120, null=False, blank=False)
    image = models.ImageField(upload_to=get_path_img, null=True, blank=True)
    shortdes = models.TextField(null=True, blank=True)
    quntity = models.IntegerField(null=False)
    price = models.FloatField(null=False, blank=False)
    offer = models.FloatField(null=True, blank=True)
    rate = models.PositiveIntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(5)])
    description = models.TextField(null=True, blank=True)
    status = models.BooleanField(
        default=False, help_text='0=default , 1=hidden')
    tranding = models.BooleanField(
        default=False, help_text="0 = default , 1=Trading")
    create_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name
