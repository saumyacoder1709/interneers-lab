from django.urls import path, include
from . import views

urlpatterns = [
    path('products/', views.product_list_controller, name="product-list"),
]