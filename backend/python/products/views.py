from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json
from .services import product_service

@api_view(['GET', 'POST'])
def product_list_controller(request):
    
    # SCENARIO 1: The user wants to SEE all products
    if request.method == 'GET':
        # 1. Ask the Chef for the data
        products = product_service.get_all_products()
        
        # 2. Translate MongoDB data into clean JSON text for the internet
        products_json = json.loads(products.to_json())
        
        # 3. Hand the plate back to the customer
        return Response(products_json, status=status.HTTP_200_OK)

    # SCENARIO 2: The user wants to CREATE a new product
    elif request.method == 'POST':
        # 1. Grab the JSON data the user sent us (the order)
        incoming_data = request.data 
        
        # 2. Hand the order to the Chef to process and save
        new_product = product_service.create_product(incoming_data)
        
        # 3. Show the customer the final saved product
        product_json = json.loads(new_product.to_json())
        return Response(product_json, status=status.HTTP_201_CREATED)