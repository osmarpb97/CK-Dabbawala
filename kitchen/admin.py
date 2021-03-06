from django.contrib import admin

from kitchen.models import ProcessedProduct, Warehouse


@admin.register(ProcessedProduct)
class AdminProcessedCartridge(admin.ModelAdmin):
    list_display = ('id', 'created_at', 'status', 'ticket', 'order_number')
    list_display_links = ('id', 'created_at')
    list_editable = ('status',)
    raw_id_fields = ('ticket',)
    search_fields = ('id', 'ticket__id',)
    ordering = ('-created_at',)


@admin.register(Warehouse)
class AdminWarehouse(admin.ModelAdmin):
    list_display = ('supply', 'status', 'quantity')

