from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views

app_name = "store"

urlpatterns = [
    path("api/", views.ProductListView.as_view(), name="store_home")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
