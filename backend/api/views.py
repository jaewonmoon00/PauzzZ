from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def analyze_eye_state(request):
    if request.method == 'GET':
        # Process image data to analyze eye state
        # TODO: integrate your eye tracking logic

        response_data = {"status": "asleep"}  # or "awake=play"
        return JsonResponse(response_data)