from mongoengine import Document, StringField, FloatField, IntField, DateTimeField
import datetime

class Product(Document):
    meta = {'collection': 'products'}

    name = StringField(required=True, max_length=255)
    description = StringField()
    price = FloatField(required=True, min_value=0.0)
    quantity = IntField(required=True, min_value=0)
    
   
    created_at = DateTimeField(default=datetime.datetime.utcnow)
    updated_at = DateTimeField(default=datetime.datetime.utcnow)

   
    def save(self, *args, **kwargs):
       
        self.updated_at = datetime.datetime.utcnow()
        
        return super(Product, self).save(*args, **kwargs)