from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import TaskView

# API Versioning
router = routers.DefaultRouter()
router.register(r'tasks', TaskView, 'tasks')

urlpatterns = [
    #  http://127.0.0.1:8000/tasks/api/v1/tasks
    path('api/v1/', include(router.urls)),
    #  http://127.0.0.1:8000/tasks/docs
    path('docs/', include_docs_urls(title='Tasks API'))
]
