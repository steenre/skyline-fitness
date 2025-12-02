from django.shortcuts import render, redirect

def index(request):
    return render(request, 'main/index.html')

def about(request):
    return render(request, 'main/about.html')

def classes(request):
    return render(request, 'main/classes.html')