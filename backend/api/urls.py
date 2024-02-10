from django.urls import path
from api import views

urlpatterns = [
    path('api/analyze/', views.analyze_eye_state, name='analyze_eye_state'),
]