from django.shortcuts import render
from django.http import HttpResponse
from .models import Fact
import json
import random

# Create your views here.
def home(request):
    return render(request, 'timeisknowledge/home.html')

def fact(request):
    t = float(request.GET.get("time", 0))

    fact_number = random.randint(1, Fact.objects.count())
    random_fact = Fact.objects.get(pk=fact_number)

    result = eval(random_fact.equation)

    fact_string = "In this time " + str(result) + " " + random_fact.sentence + " " \
                  + random_fact.did_you_know

    fact_dict = {"fact": fact_string, "link": random_fact.link}
    fact_json = json.dumps(fact_dict)
    return HttpResponse(fact_json, content_type="application/json")
