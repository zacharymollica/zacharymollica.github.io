---
layout: project
title: Ball in a Box
name: ballinabox
year: 2011
order: 11
published: false
---

PLACE IMAGES IN SPANS BASED ON NAME


{% for image in site.static_files %}

    {% if image.path contains 'assets/plant' %}

        {% unless image.path contains 'cover' or image.path contains 'thumb' %}

            <div class="span6"><img src="{{ site.baseurl }}{{ image.path }}" alt="image" /></div>

        {% endunless %}
    {% endif %}

{% endfor %}