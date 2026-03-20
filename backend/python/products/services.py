from .repository import product_repo

class ProductService:
    
    def get_all_products(self):
        
        return product_repo.get_all_products()

    def get_product_by_id(self, product_id):
        return product_repo.get_product_by_id(product_id)

    def create_product(self, product_data):
        if 'name' in product_data:
            product_data['name'] = product_data['name'].title()
        
        return product_repo.create_product(product_data)

    def delete_product(self, product_id):
        return product_repo.delete_product(product_id)

# Create a single instance of the Chef for the app to use
product_service = ProductService()