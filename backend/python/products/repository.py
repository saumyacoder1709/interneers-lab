from .models import Product

class ProductRepository:
    
    def get_all_products(self):
        return Product.objects()

    def get_product_by_id(self, product_id):
        return Product.objects(id=product_id).first()

    def create_product(self, product_data):
        new_product = Product(**product_data) 
        new_product.save() 
        return new_product

    def delete_product(self, product_id):
        product = self.get_product_by_id(product_id)
        if product:
            product.delete() 
            return True
        return False


product_repo = ProductRepository()