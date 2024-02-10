from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import base64

# Create your views here.
@csrf_exempt
def analyze_eye_state(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        image_data = base64.b64decode(data['image'])
        # Process image data to analyze eye state
        # TODO: integrate your eye tracking logic
    
        response_data = {"command": "pause"}  # or "play", "rewind"
        return JsonResponse(response_data)