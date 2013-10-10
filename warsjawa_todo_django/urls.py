from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from Todo import views

admin.autodiscover()

router = DefaultRouter()
router.register(r'item', views.ItemViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'warsjawa_todo_django.views.home', name='home'),
    # url(r'^warsjawa_todo_django/', include('warsjawa_todo_django.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

	url(r'^', include(router.urls)),
)
