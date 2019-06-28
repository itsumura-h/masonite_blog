from django.contrib import admin
from .models import PersonalInfo, Porject, AccessbleUser

# Register your models here.
admin.site.register(PersonalInfo)

admin.site.register(Porject)

class AccessbleUserAdmin(admin.ModelAdmin):
    readonly_fields = ['password']
admin.site.register(AccessbleUser, AccessbleUserAdmin)