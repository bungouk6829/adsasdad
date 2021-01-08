from django.contrib import admin
from .models import *

class Information_admin_list(admin.ModelAdmin):
    list_display = (
        'pk',
        'phone_number',
        'call_attr',
        'check_call',
        'create_at'
    )
    list_display_links = (
        'pk',
        'phone_number',
    )

admin.site.register(Information, Information_admin_list)
